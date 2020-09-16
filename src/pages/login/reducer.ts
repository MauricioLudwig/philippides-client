import { Type, State, Action } from './definitions';

export const loginInitialState: State = {
  form: {
    username: '',
  },
  loading: false,
  error: undefined,
};

export const loginReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Type.UPDATE_FORM_INPUT: {
      const { name, value } = action.payload;
      return {
        ...state,
        form: {
          ...state.form,
          [name]: value,
        },
      };
    }
    case Type.LOGIN_REQUEST: {
      return {
        ...state,
        error: undefined,
        loading: true,
      };
    }
    case Type.LOGIN_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    }
    default: {
      throw new Error('No case matched!');
    }
  }
};
