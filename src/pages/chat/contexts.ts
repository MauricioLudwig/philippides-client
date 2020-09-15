import { createContext } from 'react';
import { State } from './definitions';
import { chatInitialState } from './reducer';

export const ChatContext = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({
  state: chatInitialState,
  dispatch: () => null,
});
