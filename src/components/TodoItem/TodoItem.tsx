import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Icon} from 'native-base';
import {TodoItemType} from 'types'
import styles from './TodoItem.styles'

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
      style={styles.container}
    >
      <Text>{name}</Text>
      {isCompleted && <Icon name="checkmark"/>}
    </TouchableOpacity>
  );
};

export default TodoItem;
