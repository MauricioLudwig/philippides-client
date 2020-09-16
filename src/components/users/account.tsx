import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';

interface IProps {
  name: string;
}

const Account: React.FC<IProps> = ({ name }) => {
  const history = useHistory();

  const onClickHandler = () => {
    history.push('/login');
  };

  return (
    <div className="account">
      <div className="account__name">
        <p>{name}</p>
      </div>
      <div className="account__exit">
        <Button onClick={onClickHandler}>Sign out</Button>
      </div>
    </div>
  );
};

export default Account;
