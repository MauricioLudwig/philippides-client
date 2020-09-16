/**
 * * Action Types
 */
export enum Type {
  SET_ACCOUNT = 'SET_ACCOUNT',
}

/**
 * * Actions
 */
export type SetAccount = {
  type: Type.SET_ACCOUNT;
  payload: IAccount | null;
};

export type Action = SetAccount;

/**
 * * State
 */
export type State = {
  auth: IAccount | null;
};

/**
 * * Custom types
 */
export interface IAccount {
  id: string;
  name: string;
}
