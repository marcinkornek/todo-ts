import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {NavigationRouteProps, TodoItemType} from 'types';
import {TodoItem, ListSeparator, ListInput, Spacer} from 'components';
import {helpers} from 'utils';

type Props = NavigationRouteProps & TodoItemType;

const TodosList = ({
  listKey,
  todos,
  addTodo,
  toggleTodo,
  updateTodo,
  deleteTodo,
}: Props) => {
  const handleAddTodo = async (text: string) => {
    const key = await helpers.generateKey();

    addTodo(listKey, key, text);
  };

  const handleToggleTodo = (key: string) => {
    toggleTodo(listKey, key);
  };

  const handleUpdateTodo = (key: string, text: string) => {
    updateTodo(listKey, key, text);
  };

  const handleDeleteTodo = (key: string) => {
    deleteTodo(listKey, key);
  };

  const renderItem = ({item}: TodoItemType) => (
    <TodoItem
      item={item}
      onToggle={handleToggleTodo}
      onUpdate={handleUpdateTodo}
      onDelete={handleDeleteTodo}
    />
  );

  const renderListSeparator = () => <ListSeparator />;

  const renderFooterComponent = () => (
    <>
      <Spacer />
      <ListInput
        onSubmit={(text: string) => handleAddTodo(text)}
        placeholder="Add new todo..."
      />
    </>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        ItemSeparatorComponent={renderListSeparator}
        ListFooterComponent={renderFooterComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default TodosList;
