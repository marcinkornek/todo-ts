import React from 'react';
import {View, StyleSheet, Button, FlatList} from 'react-native';
import {NavigationRouteProps, TodoItemType} from 'types'
import {ListItem, ListSeparator, ListInput, Spacer} from 'components'
import {helpers} from 'utils'

type Props = NavigationRouteProps & TodoItemType

const ActiveList = ({ navigation, route, todos, toggleTodoList, addTodoList }: Props) => {
  const handleOpenList = (item: TodoItemType) => {
    navigation.navigate('TodosList', { title: item.name, key: item.key })
  }

  const archiveTodo = (key: string) => toggleTodoList(key)

  const handleArchiveItem = (item: TodoItemType) => {
    helpers.confirmationAlert({
      title: "Are you sure?",
      message: `Do you want to archive todo list: ${item.name}?`,
      onPressOk: () => archiveTodo(item.key)
    })
  }

  const handleAddList = async (text: string) => {
    const key = await helpers.generateKey();
    addTodoList(key, text)
  }

  const renderItem = ({ item }: TodoItemType) => (
    <ListItem
      item={item}
      onPress={handleOpenList}
      onPressButton={handleArchiveItem}
      isArchived={false}
    />
  )

  const renderListSeparator = () => <ListSeparator />

  const renderFooterComponent = () => (
    <>
      <Spacer />
      <ListInput onSubmit={(text: string) => handleAddList(text)} />
    </>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        ItemSeparatorComponent={renderListSeparator}
        ListFooterComponent={renderFooterComponent}
      />
      <Button
        title="Go to Archived list"
        onPress={() => navigation.navigate('ArchivedList')}
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

export default ActiveList
