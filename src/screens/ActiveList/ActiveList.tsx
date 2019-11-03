import React from 'react';
import {Text, View, StyleSheet, Button, FlatList} from 'react-native';
import {NavigationRouteProps, TodoItemType} from 'types'
import {TodoItem} from 'components'

type Props = NavigationRouteProps & TodoItemType

const ActiveList = ({ navigation, route, todos }: Props) => {
  const handleOnPress = (item: TodoItemType) => {
    console.log('handleOnPress', item)
  }

  const renderItem = ({ item }: TodoItemType) => (
    <TodoItem
      item={item}
      onPress={handleOnPress}
    />
  )

  return (
    <View style={styles.container}>
      <Text>ActiveList</Text>
      <FlatList
        data={todos}
        renderItem={renderItem}
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
