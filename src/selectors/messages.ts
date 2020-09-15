import { IMessage, IMessageFilters, UserType } from '../pages/chat/definitions';

type FilterMessages = (
  filters: IMessageFilters,
  messages: IMessage[]
) => IMessage[];

export const filterMessages: FilterMessages = (filters, messages) => {
  const { text, userType } = filters;
  const pattern = new RegExp(text, 'gi');

  return messages
    .filter((message) => {
      const textMatch = message.text.match(pattern);
      let userTypeMatch = false;

      switch (userType) {
        case UserType.Admin:
          userTypeMatch = message.admin;
          break;
        case UserType.User:
          userTypeMatch = !message.admin;
          break;
        case UserType.All:
        default:
          userTypeMatch = true;
          break;
      }

      return textMatch && userTypeMatch;
    })
    .map((o) => ({
      ...o,
      text: text.length === 0 ? o.text : o.text.replace(pattern, '<em>$&</em>'),
    }));
};
