import { Type, State, Action, UserType } from './definitions';

export const chatInitialState: State = {
  users: [],
  messages: [],
  filters: {
    text: '',
    userType: UserType.All,
  },
};

export const chatReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Type.ADD_USER:
      return {
        ...state,
        users: [...action.payload],
      };
    case Type.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case Type.UPDATE_FILTER: {
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    }
    case Type.RESET_FILTERS:
      return {
        ...state,
        filters: {
          ...chatInitialState.filters,
        },
      };
    default:
      throw new Error('No case matched!');
  }
};
