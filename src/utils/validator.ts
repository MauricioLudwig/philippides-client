/**
 * * User-Defined Type Guards to ensure valid data at runtime
 */

import { IMessage } from 'pages/chat/definitions';

export const isStringArray = (req: unknown): req is Array<string> =>
  Array.isArray(req) && req.every((o) => typeof o === 'string');

export const isString = (req: unknown): req is string =>
  typeof req === 'string';

export const isMessage = (req: any): req is IMessage => {
  return (
    req &&
    typeof req === 'object' &&
    typeof req?.id === 'string' &&
    typeof req?.admin === 'boolean' &&
    typeof req?.text === 'string' &&
    (req?.user === null || typeof req?.user === 'string') &&
    typeof req?.created === 'number'
  );
};
