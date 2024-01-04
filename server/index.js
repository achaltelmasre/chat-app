import express from 'express';
import mongoose from 'mongoose';
import  dotenv from 'dotenv';
dotenv.config();

import { postApiLogin, postApiSingup } from './controller/user.js';

const app = express();
app.use(express.json());

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

app.post('/api/signup', postApiSingup)

app.post('/api/login',postApiLogin )

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server is runing on port ${PORT}`)
})
