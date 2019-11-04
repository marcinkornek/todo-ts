import React from 'react';
import {Text, View, StyleSheet, Button, FlatList} from 'react-native';
import {NavigationRouteProps, TodoItemType} from 'types'
import {TodoItem, ListSeparator} from 'components'

type Props = NavigationRouteProps & TodoItemType

const ArchivedList = ({ navigation, route, todos, toggleTodoList }: Props) => {
  const handleOnPress = (item: TodoItemType) => {
    console.log('handleOnPress', item)
    toggleTodoList(item.key)
  }

  const renderItem = ({ item }: TodoItemType) => (
    <TodoItem
      item={item}
      onPress={handleOnPress}
    />
  )

  const renderListSeparator = () => <ListSeparator />

  return (
    <View style={styles.container}>
      <Text>ArchivedList</Text>
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
