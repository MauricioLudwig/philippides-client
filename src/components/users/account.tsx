import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { AuthContext } from 'utils/contexts';
import { Type } from 'reducers/auth/definitions';

interface IProps {
  name: string;
}

const Account: React.FC<IProps> = ({ name }) => {
  const { authDispatch } = useContext(AuthContext);
  const history = useHistory();

  const onClickHandler = () => {
    authDispatch({
      type: Type.SET_ACCOUNT,
      payload: null,
    });
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
