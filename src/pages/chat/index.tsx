import React, { useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const Chat = () => {
  useEffect(() => {
    const socket = socketIOClient('http://localhost:4000');

    socket.on('new-message', (data: any) => {
      console.log('data', data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <div>Chat!</div>;
};

export default Chat;
