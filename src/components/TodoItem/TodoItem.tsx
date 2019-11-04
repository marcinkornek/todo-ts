import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Icon} from 'native-base';
import {TodoItemType} from 'types'
import styles from './TodoItem.styles'

interface Props {
  onPress: Function;
  onPressButton: Function;
  item: TodoItemType
}

const TodoItem = ({ onPress, onPressButton, item }: Props) => {
  const { name, isCompleted } = item

  const handleRowPress = () => onPress(item)

  const handleButtonPress = () => onPressButton(item)

  return (
    <TouchableOpacity
      onPress={handleRowPress}
      key={item.id || item.name}
      style={styles.container}
    >
      <Text>{name}</Text>
      {isCompleted && <Icon name="checkmark" onPress={handleButtonPress}/>}
    </TouchableOpacity>
  );
};

export default TodoItem;
