export const messages = [
  {
    id: '1',
    admin: true,
    user: null,
    text: 'automatic message from admin',
    created: new Date().getTime() - 3600,
  },
  {
    id: '2',
    admin: true,
    user: null,
    text: 'Damien left the chat, connection lost',
    created: new Date().getTime() - 7200,
  },
  {
    id: '3',
    admin: false,
    user: 'Damien',
    text: 'Hello World!',
    created: new Date().getTime(),
  },
];
