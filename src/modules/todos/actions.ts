import { ItemKey, ListKey } from 'types'
import * as types from './types'

const addTodoList = (listKey: ListKey, name: string) => ({
  type: types.ADD_TODO_LIST,
  payload: {
    listKey,
    name
  },
})

const toggleTodoList = (listKey: ListKey) => ({
  type: types.TOGGLE_TODO_LIST,
  payload: {
    listKey
  },
})

const addTodo = (listKey: ListKey, key: ItemKey, name: string) => ({
  type: types.ADD_TODO,
  payload: {
    listKey,
    key,
    name
  },
})

const toggleTodo = (listKey: ListKey, key: ItemKey) => ({
  type: types.TOGGLE_TODO,
  payload: {
    listKey,
    key
  },
})

const updateTodo = (listKey: ListKey, key: ItemKey, name: string) => ({
  type: types.UPDATE_TODO,
  payload: {
    listKey,
    key,
    name
  },
})

const deleteTodo = (listKey: ListKey, key: ItemKey) => ({
  type: types.DELETE_TODO,
  payload: {
    listKey,
    key,
  },
})

export {
  addTodoList,
  toggleTodoList,
  addTodo,
  toggleTodo,
  updateTodo,
  deleteTodo
}
