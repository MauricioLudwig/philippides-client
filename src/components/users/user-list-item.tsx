import React, { useContext } from 'react';
import { Card } from 'antd';
import { AuthContext } from 'utils/contexts';
import classNames from 'classnames';

interface IProps {
  user: string;
}

const UserListItem: React.FC<IProps> = ({ user }) => {
  const {
    authState: { auth },
  } = useContext(AuthContext);

  const cardClasses = classNames('user-card', {
    'user-card--highlight': user === auth?.name,
  });

  return (
    <Card className={cardClasses}>
      <p>{user}</p>
    </Card>
  );
};

export default UserListItem;
