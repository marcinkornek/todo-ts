import React from 'react';
import {Text, View, StyleSheet, Button, FlatList} from 'react-native';
import {NavigationRouteProps, TodoItemType} from 'types'
import {ListItem, ListSeparator, ListInput} from 'components'
import {helpers} from 'utils'

type Props = NavigationRouteProps & TodoItemType

const ActiveList = ({ navigation, route, todos, toggleTodoList, addTodoList }: Props) => {
  const handleOpenList = (item: TodoItemType) => {
    navigation.navigate('TodosList', { key: item.key })
  }

  const handleArchiveItem = (item: TodoItemType) => {
    toggleTodoList(item.key)
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
