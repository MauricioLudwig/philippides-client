import React, { useContext } from 'react';
import { ChatContext } from 'pages/chat/contexts';
import { IUser } from 'pages/chat/definitions';
import UserListItem from './user-list-item';

type ByName = (a: IUser, b: IUser) => number;

const UserList = () => {
  const {
    state: { users },
  } = useContext(ChatContext);

  const byName: ByName = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }

    if (a.name > b.name) {
      return 1;
    }

    return 0;
  };

  return (
    <div className="user-list">
      {users.sort(byName).map((user) => (
        <UserListItem key={user.name} user={user} />
      ))}
    </div>
  );
};

export default UserList;
