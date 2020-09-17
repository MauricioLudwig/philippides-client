/**
 * * Action types
 */
export enum Type {
  UPDATE_FORM_INPUT = 'UPDATE_FORM_INPUT',
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
}

/**
 * * Actions
 */
export type LoginRequest = {
  type: Type.LOGIN_REQUEST;
};

export type LoginSuccess = {
  type: Type.LOGIN_SUCCESS;
  payload: {
    id: string;
    socketId: string | null;
    name: string;
  };
};

export type LoginFailure = {
  type: Type.LOGIN_FAILURE;
  payload: {
    error: string;
  };
};

export type UpdateFormInput = {
  type: Type.UPDATE_FORM_INPUT;
  payload: {
    name: string;
    value: string | boolean | number;
  };
};

export type Action =
  | LoginRequest
  | LoginSuccess
  | LoginFailure
  | UpdateFormInput;

/**
 * * State
 */
type Form = {
  username: string;
};

export type State = {
  form: Form;
  loading: boolean;
  error?: string;
};
