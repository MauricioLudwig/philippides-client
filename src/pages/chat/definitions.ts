export enum Type {}

export type State = {
  messages: Array<IMessage>;
  users: Array<IUser>;
};

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
