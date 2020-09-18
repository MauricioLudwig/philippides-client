import { filterMessages } from '../../selectors/messages';
import { UserType } from '../../pages/chat/definitions';
import { messages } from '../fixtures/messages';

describe('test suites for user type', () => {
  test('should filter messages by admin type', () => {
    const filters = {
      text: '',
      userType: UserType.Admin,
    };

    expect(filterMessages(filters, messages)).toEqual([
      messages[0],
      messages[1],
    ]);
  });

  test('should filter messages by user type', () => {
    const filters = {
      text: '',
      userType: UserType.User,
    };

    expect(filterMessages(filters, messages)).toEqual([messages[2]]);
  });
});

describe('test suites for text filtering', () => {
  test('should return all messages when text is empty', () => {
    const filters = {
      text: '',
      userType: UserType.All,
    };

    expect(filterMessages(filters, messages)).toEqual(messages);
  });

  test('should filter messages by text', () => {
    const filters = {
      text: 'world',
      userType: UserType.All,
    };

    expect(filterMessages(filters, messages)).toEqual([
      {
        ...messages[2],
        text: 'Hello <em>World</em>!',
      },
    ]);
  });
});
