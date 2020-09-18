import { State, Action, Type } from './definitions';

export const authInitialState = {
  auth: null,
  info: null,
};

export const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Type.SET_ACCOUNT:
      return {
        ...state,
        auth: action.payload ? { ...action.payload } : action.payload,
      };
    case Type.SET_INFO:
      return {
        ...state,
        info: action.payload,
      };
    default:
      throw new Error('No case matched!');
  }
};
