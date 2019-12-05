import React from 'react';
import {Text, View, StyleSheet, Button, FlatList} from 'react-native';
import {NavigationRouteProps, TodoItemType} from 'types'
import {ListItem, ListSeparator} from 'components'

type Props = NavigationRouteProps & {
  todos: Array<TodoItemType>;
  toggleTodoList: Function;
}

const ArchivedList = ({ navigation, todos, toggleTodoList }: Props) => {
  const handleUnarchiveItem = (item: TodoItemType) => {
    toggleTodoList(item.key)
  }

  const renderItem = ({ item }: TodoItemType) => (
    <ListItem
      item={item}
      onPress={() => {}}
      onPressButton={handleUnarchiveItem}
    />
  )

  const renderListSeparator = () => <ListSeparator />

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        ItemSeparatorComponent={renderListSeparator}
      />
      <Button
        title="Go to Active list"
        onPress={() => navigation.navigate('ActiveList')}
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

export default ArchivedList
