import produce from "immer"
import {TodosStateType, TodosActionType, TodoListType, TodoItemType} from 'types'
import * as types from './types'

export const initialState: TodosStateType = {
  items: [
    {
      name: "list 1",
      key: '1',
      isArchived: false,
      items: [
        {
          name: 'eggs',
          key: '11',
          isCompleted: false
        }
      ]
    },
    {
      name: "list 2",
      key: '2',
      isArchived: false,
      items: [
        {
          name: 'cheese',
          key: '21',
          isCompleted: false
        }
      ]
    },
    {
      name: "archived list 1",
      key: '3',
      isArchived: true,
      items: [
        {
          name: 'archived eggs',
          key: '31',
          isCompleted: false
        }
      ]
    },
    {
      name: "archived list 2",
      key: '4',
      isArchived: true,
      items: [
        {
          name: 'archived cheese',
          key: '41',
          isCompleted: false
        }
      ]
    }
  ]
}

export const todosReducer = (state = initialState, action: TodosActionType) => {
  return produce(state, draft => {
    switch (action.type) {
      // LISTS
      case types.ADD_TODO_LIST:
        const {key, name} = action.payload
        const newList = {
          key,
          name,
          isArchived: false,
          items: []
        }
        draft.items = [...draft.items, newList]
        break;
      case types.TOGGLE_TODO_LIST: {
        const {key} = action.payload
        const index = draft.items.findIndex((i: TodoListType) => i.key === key)
        const isArchived = draft.items[index].isArchived

        draft.items[index].isArchived = !isArchived
        break;
      }
      // ITEMS
      case types.ADD_TODO: {
        const {listKey, key, name} = action.payload
        const index = draft.items.findIndex((i: TodoListType) => i.key === listKey)
        const todos = draft.items[index].items
        const newTodo = {
          key,
          name,
          isCompleted: false
        }
        draft.items[index].items = [...todos, newTodo]
        break;
      }
      case types.TOGGLE_TODO: {
        const {listKey, key} = action.payload
        const listIndex = draft.items.findIndex((i: TodoListType) => i.key === listKey)
        const todoIndex = draft.items[listIndex].items.findIndex((i: TodoItemType) => i.key === key)
        const isCompleted = draft.items[listIndex].items[todoIndex].isCompleted

        draft.items[listIndex].items[todoIndex].isCompleted = !isCompleted
        break;
      }
      case types.UPDATE_TODO: {
        const {listKey, key, name} = action.payload
        const listIndex = draft.items.findIndex((i: TodoListType) => i.key === listKey)
        const todoIndex = draft.items[listIndex].items.findIndex((i: TodoItemType) => i.key === key)

        draft.items[listIndex].items[todoIndex].name = name
        break;
      }
      case types.DELETE_TODO: {
        const {listKey, key} = action.payload
        const listIndex = draft.items.findIndex((i: TodoListType) => i.key === listKey)
        draft.items[listIndex].items = draft.items[listIndex].items.filter((t: TodoItemType) => t.key !== key)
        break;
      }
      default:
        return state
    }
  }
)}

const reducer = {
  todos: todosReducer,
}

export default reducer
