import React, { useState } from 'react';
import { Input, Button } from 'antd';

interface IProps {
  sendMessage: (message: string) => void;
}

const MessagesBox: React.FC<IProps> = ({ sendMessage }) => {
  const [value, setValue] = useState('');
  const emptyValue = value?.length === 0 ?? true;

  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const onKeyPressHandler = (e: React.KeyboardEvent) => {
    if (e.charCode === 13 && !emptyValue) {
      onSendHandler();
    }
  };

  const onSendHandler = () => {
    sendMessage(value);
    setValue('');
  };

  return (
    <div className="messages-box">
      <Input
        autoFocus
        size="large"
        placeholder="type your message"
        value={value}
        onChange={onChangeHandler}
        onKeyPress={onKeyPressHandler}
      />
      <Button size="large" disabled={emptyValue} onClick={onSendHandler}>
        Send
      </Button>
    </div>
  );
};

export default MessagesBox;
