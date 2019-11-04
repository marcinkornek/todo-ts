import React from 'react';
import {Text, View, StyleSheet, Button, FlatList} from 'react-native';
import UUIDGenerator from 'react-native-uuid-generator';
import {NavigationRouteProps, TodoItemType} from 'types'
import {TodoItem, ListSeparator, ListInput} from 'components'

type Props = NavigationRouteProps & TodoItemType

const ActiveList = ({ navigation, route, todos, toggleTodoList, addTodoList }: Props) => {
  const handleOpenList = (item: TodoItemType) => {
    console.log('handleOnPress', item)
  }

  const handleArchiveItem = (item: TodoItemType) => {
    console.log('handleOnPress', item)
    toggleTodoList(item.key)
  }

  const handleAddList = async (text: string) => {
    const key = await UUIDGenerator.getRandomUUID();
    addTodoList(key, text)
  }

  const renderItem = ({ item }: TodoItemType) => (
    <TodoItem
      item={item}
      onPress={handleOpenList}
      onPressButton={handleArchiveItem}
      isArchived={false}
    />
  )

  const renderListSeparator = () => <ListSeparator />

  const renderFooterComponent = () => (
    <ListInput onSubmit={(text: string) => handleAddList(text)} />
  )

  return (
    <View style={styles.container}>
      <Text>ActiveList</Text>
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
