import React, { useContext, useEffect, useRef, Fragment } from 'react';
import { ChatContext } from 'pages/chat/contexts';
import { filterMessages } from 'selectors/messages';
import MessagesListItem from './messages-list-item';

const MessagesList = () => {
  const messagesListContainerBtm = useRef<HTMLDivElement | null>(null);

  const {
    state: { filters, messages },
  } = useContext(ChatContext);

  useEffect(() => {
    messagesListContainerBtm.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages]);

  const filteredMessages = filterMessages(filters, messages);

  if (filteredMessages.length === 0) {
    return (
      <div className="messages-list--empty">
        <p>No messages found...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <div>
        {filteredMessages.map((message) => (
          <MessagesListItem key={message.id} message={message} />
        ))}
      </div>
      <div ref={messagesListContainerBtm} />
    </Fragment>
  );
};

export default MessagesList;
