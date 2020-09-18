/**
 * * Action Types
 */
export enum Type {
  SET_ACCOUNT = 'SET_ACCOUNT',
  SET_INFO = 'SET_INFO',
}

/**
 * * Actions
 */
export type SetAccount = {
  type: Type.SET_ACCOUNT;
  payload: IAccount | null;
};

export type SetInfo = {
  type: Type.SET_INFO;
  payload: string | null;
};

export type Action = SetAccount | SetInfo;

/**
 * * State
 */
export type State = {
  auth: IAccount | null;
  info: string | null;
};

/**
 * * Custom types
 */
export interface IAccount {
  id: string;
  name: string;
}
