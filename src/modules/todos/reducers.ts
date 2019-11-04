import {TodosStateType, TodosActionType} from 'types'
import * as types from './types'

const initialList = {
  isArchived: false,
  items: []
}

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
  switch (action.type) {
    case types.ADD_TODO_LIST:
      const {key, name} = action.payload
      const newList = {
        ...initialList,
        name,
        key
      }

      return {
        ...state,
        items: [...state.items, newList]
      }
    case types.ADD_TODO_ITEM:
      return {
        ...state,
        items: [...state.items, action.todo]
      }
    case types.TOGGLE_TODO_LIST:
      return {
        ...state,
        items: state.items.map(i => {
          if (i.key === action.payload.key) {
            return ({
              ...i,
              isArchived: !i.isArchived
            })
          }

          return i
        })
      }
    default:
      return state
  }
}

const reducer = {
  todos: todosReducer,
}

export default reducer
