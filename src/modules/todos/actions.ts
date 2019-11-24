import * as types from './types'

const addTodoList = (key: string, name: string) => ({
  type: types.ADD_TODO_LIST,
  payload: {
    key,
    name
  },
})

const addTodoItem = (name: string) => ({
  type: types.ADD_TODO_ITEM,
  payload: {
    name
  },
})

const toggleTodoList = (key: string) => ({
  type: types.TOGGLE_TODO_LIST,
  payload: {
    key
  },
})

const addTodo = (listKey: string, key: string, name: string) => ({
  type: types.ADD_TODO,
  payload: {
    listKey,
    key,
    name
  },
})

const updateTodo = (listKey: string, key: string, name: string) => ({
  type: types.UPDATE_TODO,
  payload: {
    listKey,
    key,
    name
  },
})

const deleteTodo = (listKey: string, key: string) => ({
  type: types.DELETE_TODO,
  payload: {
    listKey,
    key,
  },
})

export {
  addTodoList,
  addTodoItem,
  toggleTodoList,
  addTodo,
  updateTodo,
  deleteTodo
}
