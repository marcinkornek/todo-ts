import {createSelector} from 'reselect';
import createCachedSelector from 're-reselect';
import {TodoItemType, TodoListType, AppStateType} from 'types';

const todoListsSelector = (state: AppStateType, _key: string) =>
  state.todos.items;

const listKey = (_state: AppStateType, key: string) => key;

const activeTodos = createSelector(
  todoListsSelector,
  (todos: TodoListType[]) => todos.filter((i: TodoItemType) => !i.isArchived),
);

const archivedTodos = createSelector(
  todoListsSelector,
  (todos: TodoListType[]) => todos.filter((i: TodoItemType) => i.isArchived),
);

const todosByKey = createCachedSelector(
  activeTodos,
  listKey,
  (todos: TodoListType[], key: string) =>
    todos.find((t: TodoItemType) => t.key === key).items,
)((state, key) => key);

export {activeTodos, archivedTodos, todosByKey};
