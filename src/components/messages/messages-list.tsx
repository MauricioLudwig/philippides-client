import React, { useContext } from 'react';
import { ChatContext } from 'pages/chat/contexts';
import { filterMessages } from 'selectors/messages';
import MessagesListItem from './messages-list-item';

const MessagesList = () => {
  const {
    state: { filters, messages },
  } = useContext(ChatContext);

  const filteredMessages = filterMessages(filters, messages);

  if (filteredMessages.length === 0) {
    return (
      <div className="messages-list--empty">
        <p>No messages found...</p>
      </div>
    );
  }

  return (
    <div>
      {filteredMessages.map((message) => (
        <MessagesListItem key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessagesList;
