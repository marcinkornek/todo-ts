import * as types from './types'
import {TodosStateType, TodosActionType} from 'types'

export const initialState: TodosStateType = {
  items: [
    {
      name: "list 1",
      isArchived: false,
      items: [
        {
          name: 'eggs',
          isCompleted: false
        }
      ]
    },
    {
      name: "list 2",
      isArchived: false,
      items: [
        {
          name: 'cheese',
          isCompleted: false
        }
      ]
    },
    {
      name: "archived list 1",
      isArchived: true,
      items: [
        {
          name: 'archived eggs',
          isCompleted: false
        }
      ]
    },
    {
      name: "archived list 2",
      isArchived: true,
      items: [
        {
          name: 'archived cheese',
          isCompleted: false
        }
      ]
    }
  ]
}

export const todosReducer = (state = initialState, action: TodosActionType) => {
  switch (action.type) {
    case types.ADD_TODO_LIST:
      return {
        ...state,
        items: [...state.items, action.todo]
      }
    case types.ADD_TODO_ITEM:
      return {
        ...state,
        items: [...state.items, action.todo]
      }
    default:
      return state
  }
}

const reducer = {
  todos: todosReducer,
}

export default reducer
