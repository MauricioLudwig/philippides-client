import { Type, State, Action } from './definitions';

export const loginInitialState: State = {
  form: {
    username: '',
  },
  loading: false,
  error: undefined,
};

export const loginReducer = (
  state: State,
  { type, payload }: Action
): State => {
  switch (type) {
    case Type.UPDATE_FORM_INPUT: {
      const { name, value } = payload;
      return {
        ...state,
        form: {
          ...state.form,
          [name]: value,
        },
      };
    }
    default: {
      throw new Error(`No match found for ${type}.`);
    }
  }
};
