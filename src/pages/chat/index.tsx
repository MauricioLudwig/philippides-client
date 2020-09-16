import React, { useEffect, useReducer, useRef } from 'react';
import io from 'socket.io-client';

import { ChatContext } from './contexts';
import { chatReducer, chatInitialState } from './reducer';
import Filters from 'components/filters/filters';
import MessagesList from 'components/messages/messages-list';
import MessagesBox from 'components/messages/message-box';
import { Type, IMessage } from './definitions';
import Account from 'components/users/account';
import UserList from 'components/users/user-list';
import { SocketType } from 'utils/socket';
import Debug from 'utils/debug';

const Chat = () => {
  const [state, dispatch] = useReducer(chatReducer, chatInitialState);
  const socketRef = useRef<SocketIOClient.Socket | null>(null);

  useEffect(() => {
    socketRef.current = io.connect('http://localhost:4000');

    socketRef.current.on(SocketType.NewMessage, (data: any) => {
      console.log('data', data);
      dispatch({
        type: Type.ADD_MESSAGE,
        payload: data,
      });
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  const sendMessage = (text: string): void => {
    socketRef.current?.emit(SocketType.NewMessage, {
      id: '123',
      text,
    });
  };

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      <Debug data={state} />
      <div className="chat-layout">
        <div className="window">
          <div className="window__filters">
            <Filters />
          </div>
          <div className="window__messages">
            <MessagesList />
          </div>
          <div className="window__message-box">
            <MessagesBox sendMessage={sendMessage} />
          </div>
        </div>
        <div className="sidebar">
          <div className="sidebar__account">
            <Account name="Damien" />
          </div>
          <div className="sidebar__users">
            <UserList />
          </div>
        </div>
      </div>
    </ChatContext.Provider>
  );
};

export default Chat;
