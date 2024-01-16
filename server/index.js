import express from 'express';
import mongoose from 'mongoose';
import  dotenv from 'dotenv';
dotenv.config();
import { Server } from 'socket.io';

import { postApiLogin, postApiSignup } from './controller/user.js';

const app = express();
app.use(express.json());

const io = new Server(5002, {
    cors: {
       origin: '*',
    },
});

io.on('connection', (socket) => {
    console.log('a user connected');

   socket.on('message', (data)=>{
     console.log(data);
   }) 
});

app.get('/sendMessage', (req, res) => {
   const { message } = req.query;
   io.emit('receive', message);

   res.status(200).json({ message: 'Message sent' });
});

const connectDB = async () => {

    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        if (conn) {
            console.log('MongoDB connected')
        }
    }
    catch(e) {
        console.log(e.message);
    }
};
connectDB();

app.post('/api/signup', postApiSignup)

app.post('/api/login',postApiLogin )

app.get('/users', async (req, res) => {
    const users = await User.find({}).select('_id fullName email');
    res.status(200).json({ data: users });
  });

const PORT = 5001;

app.listen(PORT, () => {
    console.log(`server is runing on port ${PORT}`)
})
