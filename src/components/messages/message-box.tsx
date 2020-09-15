import React from 'react';
import { Input, Button } from 'antd';

const MessagesBox = () => {
  const onSendHandler = () => {};

  return (
    <div className="messages-box">
      <Input name="" size="large" placeholder="type your message" />
      <Button size="large" onClick={onSendHandler}>
        Send
      </Button>
    </div>
  );
};

export default MessagesBox;
