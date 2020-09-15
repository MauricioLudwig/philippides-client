/**
 * * Action types
 */
export enum Type {
  ADD_USER = 'ADD_USER',
  ADD_MESSAGE = 'ADD_MESSAGE',
  UPDATE_FILTER = 'UPDATE_FILTER',
  RESET_FILTERS = 'RESET_FILTERS',
}

/**
 * * Actions
 */
export type AddUser = {
  type: Type.ADD_USER;
  payload: IUser;
};

export type AddMessage = {
  type: Type.ADD_MESSAGE;
  payload: IMessage;
};

export type UpdateFilter = {
  type: Type.UPDATE_FILTER;
  payload: IFormInput;
};

export type ResetFilter = {
  type: Type.RESET_FILTERS;
};

export type Action = AddUser | AddMessage | UpdateFilter | ResetFilter;

/**
 * * State
 */
export type State = {
  users: Array<IUser>;
  messages: Array<IMessage>;
  filters: IMessageFilters;
};

/**
 * * Custom types
 */
export interface IUser {
  name: string;
}

export interface IMessage {
  id: string;
  admin: boolean;
  user: string | null;
  text: string;
  created: number;
}

export enum UserType {
  All = '0',
  Admin = '1',
  User = '2',
}

export interface IMessageFilters {
  text: string;
  userType: UserType;
}

export interface IFormInput {
  name: string;
  value: string | boolean | number;
}
