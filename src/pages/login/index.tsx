import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import { loginReducer, loginInitialState } from './reducer';
import { Type } from './definitions';
import { Input, Button, Alert, Typography } from 'antd';
import { AuthContext } from 'utils/contexts';
import { Type as AuthTypes } from 'reducers/auth/definitions';

const { Title } = Typography;

const Login = () => {
  const {
    authState: { info },
    authDispatch,
  } = useContext(AuthContext);
  const [state, dispatch] = useReducer(loginReducer, loginInitialState);
  const {
    form: { username },
    loading,
    error,
  } = state;
  const emptyValue = username?.length === 0 ?? true;

  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    dispatch({
      type: Type.UPDATE_FORM_INPUT,
      payload: {
        name,
        value,
      },
    });
  };

  const onKeyPressHandler = (e: React.KeyboardEvent) => {
    if (e.charCode === 13 && !emptyValue) {
      onClickHandler();
    }
  };

  const handleSignIn = async () => {
    dispatch({
      type: Type.LOGIN_REQUEST,
    });

    try {
      const { data } = await axios.post('/users/login', {
        name: username,
      });
      authDispatch({
        type: AuthTypes.SET_ACCOUNT,
        payload: data,
      });
    } catch (e) {
      const error = e.response?.data?.error ?? 'Unexpected error';
      dispatch({
        type: Type.LOGIN_FAILURE,
        payload: {
          error,
        },
      });
    }
  };

  const onClickHandler = () => {
    handleSignIn();
  };

  return (
    <div className="login-layout">
      <div className="login-layout__box">
        <Title level={2}>Philippides</Title>
        <p className="box__subtitle">
          Deliver your message, as Philippides once did.
        </p>
        <Input
          name="username"
          autoFocus
          size="large"
          placeholder="a suitable name"
          value={username}
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
        />
        <Button
          className="box__login-btn"
          size="large"
          disabled={emptyValue}
          loading={loading}
          onClick={onClickHandler}
        >
          Start chatting!
        </Button>
        {error && (
          <Alert
            className="box__alert"
            message="Oops, something went wrong..."
            description={error}
            type="error"
          />
        )}
        {info && (
          <Alert
            className="box__alert"
            message="Notification"
            description={info}
            type="warning"
          />
        )}
      </div>
    </div>
  );
};

export default Login;
