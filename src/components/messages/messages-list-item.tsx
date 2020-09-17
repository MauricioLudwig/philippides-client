import React, { useContext } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import { IMessage } from 'pages/chat/definitions';
import { AuthContext } from 'utils/contexts';

interface IProps {
  message: IMessage;
}

const MessagesListItem: React.FC<IProps> = ({ message }) => {
  const {
    authState: { auth },
  } = useContext(AuthContext);
  const { admin, user, text, created } = message;

  const messageClasses = classNames('message', {
    'message--align-right': message.user === auth?.name,
  });

  const bodyClasses = classNames('body', {
    'body--highlight': admin,
  });

  return (
    <div className={messageClasses}>
      <p className="user">{admin ? 'Administrator' : user}</p>
      <div className={bodyClasses}>
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <small>{moment(created).format('MMMM Do YYYY, h:mm')}</small>
    </div>
  );
};

export default MessagesListItem;
