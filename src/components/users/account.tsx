import React from 'react';
import { Button } from 'antd';

interface IProps {
  name: string;
  signOut: () => void;
}

const Account: React.FC<IProps> = ({ name, signOut }) => (
  <div className="account">
    <div className="account__name">
      <p>{name}</p>
    </div>
    <div className="account__exit">
      <Button onClick={signOut}>Sign out</Button>
    </div>
  </div>
);

export default Account;
