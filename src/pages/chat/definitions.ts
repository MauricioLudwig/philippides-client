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
  message: string;
  created: number;
}

export interface IMessageFilters {
  text?: string;
  user?: string;
}
