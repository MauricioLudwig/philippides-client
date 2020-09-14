import React, { useReducer } from 'react';
import { loginReducer, loginInitialState } from './reducer';
import { Type } from './definitions';
import Debug from '../../utils/debug';

const Login = () => {
  const [state, dispatch] = useReducer(loginReducer, loginInitialState);
  const {
    form: { username },
    loading,
    error,
  } = state;

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

  return (
    <div>
      <Debug data={[]} />
      <input name="username" value={username} onChange={onChangeHandler} />
      <button>Talk!</button>
      {loading && <p>LOADING!</p>}
      {error && <p>ERROR!</p>}
    </div>
  );
};

export default Login;
