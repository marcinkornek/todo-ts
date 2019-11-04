import * as types from './types'

const addTodoList = (name: string) => ({
  type: types.ADD_TODO_LIST,
  payload: {
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

export {
  addTodoList,
  addTodoItem,
  toggleTodoList,
}
