import React from 'react';
import { IUser } from 'pages/chat/definitions';
import { Card } from 'antd';

interface IProps {
  user: IUser;
}

const UserListItem: React.FC<IProps> = ({ user }) => {
  return (
    <Card>
      <p>{user.name}</p>
    </Card>
  );
};

export default UserListItem;
