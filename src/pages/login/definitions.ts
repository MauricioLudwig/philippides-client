export enum Type {
  UPDATE_FORM_INPUT = 'UPDATE_FORM_INPUT',
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
}

interface IAction {
  type: Type;
}

export interface IUpdateFormInput extends IAction {
  payload: {
    name: string;
    value: string | boolean | number;
  };
}

export type Action = IUpdateFormInput;

type Form = {
  username: string;
};

export type State = {
  form: Form;
  loading: boolean;
  error?: string;
};
