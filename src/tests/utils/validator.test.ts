import { isStringArray, isString, isMessage } from 'utils/validator';

describe('test suites for isStringArray', () => {
  test('should return false for array of different types', () => {
    expect(isStringArray([1, '2'])).toBeFalsy();
  });

  test('should return true for a valid array of strings', () => {
    expect(isStringArray(['1', '2'])).toBeTruthy();
  });
});

describe('test suites for isString', () => {
  test('should return false for an invalid string', () => {
    expect(isString(2)).toBeFalsy();
  });

  test('should return true for a valid string', () => {
    expect(isString('')).toBeTruthy();
  });
});

describe('test suites for isMessage', () => {
  test('should return false for an invalid message', () => {
    expect(
      isMessage({
        id: '123',
        text: 'hello world',
      })
    ).toBeFalsy();
  });

  test('should return true for a valid message (user message)', () => {
    expect(
      isMessage({
        id: '123',
        admin: false,
        text: 'hello world',
        user: '123',
        created: 12345,
      })
    ).toBeTruthy();
  });

  test('should return true for a valid message (admin message)', () => {
    expect(
      isMessage({
        id: '123',
        admin: true,
        text: 'hello world',
        user: null,
        created: 12345,
      })
    ).toBeTruthy();
  });
});
