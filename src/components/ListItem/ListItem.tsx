import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Icon} from 'native-base';
import {TodoItemType} from 'types'
import styles from './ListItem.styles'

interface Props {
  onPress: Function;
  onPressButton: Function;
  item: TodoItemType
}

const ListItem = ({ onPress, onPressButton, item }: Props) => {
  const { name, isArchived } = item

  const handleRowPress = () => onPress(item)

  const handleButtonPress = () => onPressButton(item)

  return (
    <TouchableOpacity
      onPress={handleRowPress}
      key={item.id || item.name}
      style={styles.container}
    >
      <Text>{name}</Text>
      <Icon name={isArchived ? "refresh" : "trash"} onPress={handleButtonPress}/>
    </TouchableOpacity>
  );
};

export default ListItem;
