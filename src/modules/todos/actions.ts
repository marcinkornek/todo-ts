import * as types from './types'

const addTodoList = (name: string) => ({
  type: types.ADD_TODO_LIST,
  payload: {
    name
  },
})

const addTodoItem = (name: string) => ({
  type: types.ADD_TODO_LIST,
  payload: {
    name
  },
})

export {
  addTodoList,
  addTodoItem,
}
