import React, {useState} from 'react';
import {TouchableOpacity, Text, TextInput, View} from 'react-native';
import {Icon} from 'native-base';
import ListInput from '../ListInput/ListInput';
import {TodoItemType} from 'types'
import {helpers} from 'utils'
import styles from './TodoItem.styles'

interface Props {
  onToggle: Function;
  onUpdate: Function;
  onDelete: Function;
  item: TodoItemType
}

const TodoItem = ({ onToggle, onUpdate, onDelete, item }: Props) => {
  const { name, isCompleted } = item
  const [isEditing, setIsEditing] = useState(false)

  const handleCompletePress = () => onToggle(item.key)

  const handleEditPress = () => {
    if (isCompleted) return helpers.alert('You can only edit not completed todos')

    setIsEditing(true)
  }

  const updateTodo = (text: string) => {
    onUpdate(item.key, text)
    setIsEditing(false)
  }

  const handleDeletePress = () => onDelete(item.key)

  const viewTodo = () => (
    <TouchableOpacity
      onPress={handleCompletePress}
      key={item.id || item.name}
      style={styles.container}
    >
      <Text style={[styles.text, isCompleted && styles.textCompleted]}>{name}</Text>
      <View style={styles.actionButtons}>
        <Icon name="create" onPress={handleEditPress}/>
        <Icon name="trash" onPress={handleDeletePress}/>
      </View>
    </TouchableOpacity>
  )

  const editTodo = () => (
    <>
      <ListInput value={name} onSubmit={updateTodo}/>
    </>
  )

  return isEditing ? editTodo() : viewTodo();
};

export default TodoItem;
