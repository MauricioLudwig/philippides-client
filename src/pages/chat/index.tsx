import React, { useEffect, useReducer } from 'react';
import socketIOClient from 'socket.io-client';

import { ChatContext } from './contexts';
import { chatReducer, chatInitialState } from './reducer';
import Filters from 'components/filters/filters';
import MessagesList from 'components/messages/messages-list';
import MessagesBox from 'components/messages/message-box';
import { Type } from './definitions';

const Chat = () => {
  const [state, dispatch] = useReducer(chatReducer, chatInitialState);

  useEffect(() => {
    const socket = socketIOClient('http://localhost:4000');

    socket.on('new-message', (data: any) => {
      dispatch({
        type: Type.ADD_MESSAGE,
        payload: data,
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      <div className="chat-layout">
        <div className="window">
          <div className="window__filters">
            <Filters />
          </div>
          <div className="window__messages">
            <MessagesList />
          </div>
          <div className="window__message-box">
            <MessagesBox />
          </div>
        </div>
        <div className="sidebar">
          <div>Profile</div>
          <div>Users</div>
          <div>Exit</div>
        </div>
      </div>
    </ChatContext.Provider>
  );
};

export default Chat;
