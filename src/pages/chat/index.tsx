import React, { useEffect, useReducer, useRef, useContext } from 'react';
import io from 'socket.io-client';

import { ChatContext } from './contexts';
import { AuthContext } from 'utils/contexts';
import { chatReducer, chatInitialState } from './reducer';
import Filters from 'components/filters/filters';
import MessagesList from 'components/messages/messages-list';
import MessagesBox from 'components/messages/message-box';
import { Type } from './definitions';
import { Type as AuthType } from 'reducers/auth/definitions';
import Account from 'components/users/account';
import UserList from 'components/users/user-list';
import { SocketType } from 'utils/socket';

const Chat = () => {
  const [state, dispatch] = useReducer(chatReducer, chatInitialState);
  const {
    authState: { auth },
    authDispatch,
  } = useContext(AuthContext);

  const socketRef = useRef<SocketIOClient.Socket | null>(null);

  useEffect(() => {
    socketRef.current = io(`http://localhost:4000?userId=${auth?.id}`);

    socketRef.current.on(SocketType.ActiveUsers, (data: string[]) => {
      dispatch({
        type: Type.ADD_USER,
        payload: data,
      });
    });

    socketRef.current.on(SocketType.NewMessage, (data: any) => {
      dispatch({
        type: Type.ADD_MESSAGE,
        payload: data,
      });
    });

    socketRef.current.on('disconnect', () => {
      authDispatch({
        type: AuthType.SET_ACCOUNT,
        payload: null,
      });
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  const sendMessage = (text: string): void => {
    socketRef.current?.emit(SocketType.NewMessage, {
      id: auth?.name,
      text,
    });
  };

  if (!auth?.name) {
    return;
  }

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
            <MessagesBox sendMessage={sendMessage} />
          </div>
        </div>
        <div className="sidebar">
          <div className="sidebar__account">
            <Account name={auth.name} />
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
