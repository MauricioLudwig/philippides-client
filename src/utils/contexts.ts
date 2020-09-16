import { createContext } from 'react';
import { State as AuthStateDef } from 'reducers/auth/definitions';
import { authInitialState } from 'reducers/auth';

/**
 * * A collection of global contexts, intended for use within the entire application
 */

export const AuthContext = createContext<{
  authState: AuthStateDef;
  authDispatch: React.Dispatch<any>;
}>({
  authState: authInitialState,
  authDispatch: () => null,
});
