import { IMessage, IMessageFilters } from '../pages/chat/definitions';

type FilterMessages = (
  filters: IMessageFilters,
  messages: IMessage[]
) => IMessage[];

export const filterMessages: FilterMessages = (filters, messages) => {
  const { text, user } = filters;
  const pattern = new RegExp(text ?? '', 'gi');

  return messages.filter((m) => {
    const textMatch = typeof text === 'undefined' || m.message.match(pattern);
    const userMatch = typeof user === 'undefined' || m.user === user;
    return textMatch && userMatch;
  });
};
