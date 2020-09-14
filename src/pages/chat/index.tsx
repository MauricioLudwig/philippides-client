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

  return (
    <div className="chat-layout">
      <div className="window">
        <div className="window__filters-container">Filters</div>
        <div className="window__messages-container">Window</div>
        <div className="window__input-container">Input</div>
      </div>
      <div className="sidebar">
        <div>Profile</div>
        <div>Users</div>
        <div>Exit</div>
      </div>
    </div>
  );
};

export default Chat;
