import React, { useContext } from 'react';
import { ChatContext } from 'pages/chat/contexts';
import UserListItem from './user-list-item';

const UserList = () => {
  const {
    state: { users },
  } = useContext(ChatContext);

  return (
    <div className="user-list">
      {users.sort().map((user) => (
        <UserListItem key={user} user={user} />
      ))}
    </div>
  );
};

export default UserList;
