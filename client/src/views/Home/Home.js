import React, { useEffect, useState} from "react";
import { io } from "socket.io-client";

const socket = io("ws://localhost:5002");

function Home () {

    const [message, setMessage] = useState();
    const [messages, setMessages ] = useState([]);

    useEffect(() => {
      socket.on('message', (data) => {
        setMessages([...messages, data])
      });
    }, []);

    return(
        <>
        <div>
          <h1>Chat App</h1>
          <input type="text" placeholder="Enter message"
             onChange={(e) => setMessage(e.target.value)}
              value={message}/>

              {
                messages.map((message) => (
                  <div> 
                    <p>{message.timestamp}</p>
                    <p>{message.message}</p>
                    <hr />
                  </div>
                ))
              }

          <button onClick={() => {
            socket.emit('message', {
               sender: 'sender',
               receiver: 'receiver',
               message,
               timestamp: new Date().toISOString(),
            });
            setMessage('');
          }}>Send message</button>
          
          </div>
        </>
    )
}
export default Home;
