import { Type, State, Action, UserType } from './definitions';
import { messages } from 'tests/fixtures/messages';

// TODO remove test data!

export const chatInitialState: State = {
  users: [
    {
      name: 'Damien',
    },
    {
      name: 'Franz',
    },
    {
      name: 'Scapigliata',
    },
    {
      name: 'Batman',
    },
    {
      name: 'Bruce',
    },
  ],
  messages,
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
        users: [...state.users, action.payload],
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
