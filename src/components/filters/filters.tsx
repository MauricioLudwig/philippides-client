import React, { useContext } from 'react';
import { Input, Select, Button } from 'antd';
import { ChatContext } from 'pages/chat/contexts';
import { UserType, Type as ChatTypes } from 'pages/chat/definitions';

const { Option } = Select;

const userTypeOptions = Object.entries(UserType).map(([label, value]) => ({
  label,
  value,
}));

const Filters = () => {
  const {
    state: { filters },
    dispatch,
  } = useContext(ChatContext);

  const { text, userType } = filters;

  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    dispatch({
      type: ChatTypes.UPDATE_FILTER,
      payload: { value, name },
    });
  };

  const onSelectHandler = (value: string) => {
    dispatch({
      type: ChatTypes.UPDATE_FILTER,
      payload: {
        value,
        name: 'userType',
      },
    });
  };

  const onResetHandler = () => {
    dispatch({
      type: ChatTypes.RESET_FILTERS,
    });
  };

  return (
    <div className="filters">
      <div className="wrapper">
        <Input
          name="text"
          placeholder="search messages"
          value={text}
          onChange={onChangeHandler}
        />
        <Select
          value={userType}
          onChange={onSelectHandler}
          style={{ width: 140 }}
        >
          {userTypeOptions.map(({ value, label }) => (
            <Option key={value} value={value}>
              {label}
            </Option>
          ))}
        </Select>
      </div>
      <div>
        <Button onClick={onResetHandler}>Reset filters</Button>
      </div>
    </div>
  );
};

export default Filters;
