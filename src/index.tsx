import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './styles/styles.scss';

import AppRouter from './routers';
import { AuthContext } from 'utils/contexts';
import { authReducer, authInitialState } from 'reducers/auth';

interface IProps {
  children: React.ReactNode;
}

const App: React.FC<IProps> = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

ReactDOM.render(
  <App>
    <AppRouter />
  </App>,
  document.getElementById('root')
);
