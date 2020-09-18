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
import { isStringArray, isString, isMessage } from 'utils/validator';

const Chat = () => {
  const [state, dispatch] = useReducer(chatReducer, chatInitialState);
  const {
    authState: { auth },
    authDispatch,
  } = useContext(AuthContext);

  const socketRef = useRef<SocketIOClient.Socket | null>(null);

  useEffect(() => {
    socketRef.current = io(`http://localhost:4000?userId=${auth?.id}`);

    socketRef.current.on(SocketType.ActiveUsers, (data: unknown) => {
      if (!isStringArray(data)) {
        clientAlert('unable to fetch list of active users');
        return;
      }

      dispatch({
        type: Type.ADD_USER,
        payload: data,
      });
    });

    socketRef.current.on(SocketType.NewMessage, (data: unknown) => {
      if (!isMessage(data)) {
        clientAlert('unable to fetch new message');
        return;
      }

      dispatch({
        type: Type.ADD_MESSAGE,
        payload: data,
      });
    });

    socketRef.current.on(SocketType.Alert, (data: unknown) => {
      clientAlert(
        `Oops, something went wrong: ${
          isString(data) ? data : 'contact support or try again'
        }`
      );
    });

    socketRef.current.on(SocketType.Disconnect, () => {
      authDispatch({
        type: AuthType.SET_ACCOUNT,
        payload: null,
      });
    });

    socketRef.current.on(SocketType.UserInactive, () => {
      socketRef.current?.emit(SocketType.UserInactive);
      authDispatch({
        type: AuthType.SET_ACCOUNT,
        payload: null,
      });
      authDispatch({
        type: AuthType.SET_INFO,
        payload: 'You have been logged out due to inactivity.',
      });
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []); // eslint-disable-line

  const clientAlert = (msg: string): void => {
    alert(msg);
  };

  const sendMessage = (text: string): void => {
    socketRef.current?.emit(SocketType.NewMessage, {
      id: auth?.name,
      text,
    });
  };

  const signOut = (): void => {
    socketRef.current?.emit(SocketType.UserDisconnected);
    authDispatch({
      type: AuthType.SET_ACCOUNT,
      payload: null,
    });
    authDispatch({
      type: AuthType.SET_INFO,
      payload: 'You have been logged out.',
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
            <Account name={auth.name} signOut={signOut} />
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
