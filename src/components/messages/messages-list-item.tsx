import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import { IMessage } from 'pages/chat/definitions';

interface IProps {
  message: IMessage;
}

const MessagesListItem: React.FC<IProps> = ({ message }) => {
  const { id, admin, user, text, created } = message;

  const bodyClasses = classNames('body', {
    'body--highlight': admin,
  });

  return (
    <div className="message">
      <p className="user">{admin ? 'Administrator' : user}</p>
      <div className={bodyClasses}>
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <small>{moment(created).fromNow()}</small>
    </div>
  );
};

export default MessagesListItem;
