import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {TodoItemType} from 'types'

interface Props {
  onPress: Function;
  item: TodoItemType
}

const TodoItem = ({ onPress, item }: Props) => {
  const { name, isCompleted } = item

  const handleOnPress = () => onPress(item)

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      key={item.id || item.name}
    >
      <Text>{name}</Text>
      <Text>{`completed: ${isCompleted ? 'true' : 'false'}`}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;
