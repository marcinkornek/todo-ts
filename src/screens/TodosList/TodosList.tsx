import React from 'react';
import {Text, View, StyleSheet, Button, FlatList} from 'react-native';
import {NavigationRouteProps, TodoItemType} from 'types'
import {ListItem, ListSeparator, ListInput} from 'components'
import {helpers} from 'utils'

type Props = NavigationRouteProps & TodoItemType

const TodosList = ({ navigation, route, listKey, todos, addTodo, updateTodo, deleteTodo }: Props) => {
  const handleAddTodo = async (text: string) => {
    const key = await helpers.generateKey();

    addTodo(listKey, key, text)
  }

  const handleEditTodo = (key: string, text: string) => {
    updateTodo(listKey, key, text)
  }

  const handleDeleteTodo = (key: string) => {
    deleteTodo(listKey, key)
  }

  const renderItem = ({ item }: TodoItemType) => (
    <ListItem
      item={item}
      onPress={() => {}}
    />
  )

  const renderListSeparator = () => <ListSeparator />

  const renderFooterComponent = () => (
    <ListInput
      onSubmit={(text: string) => handleAddTodo(text)}
      placeholder="Add new todo..."
    />
  )

  return (
    <View style={styles.container}>
      <Text>TodosList</Text>
      <FlatList
        data={todos}
        renderItem={renderItem}
        ItemSeparatorComponent={renderListSeparator}
        ListFooterComponent={renderFooterComponent}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default TodosList
