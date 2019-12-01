import produce from "immer"
import {TodosStateType, TodosActionType, TodoListType, TodoItemType} from 'types'
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
  return produce(state, draft => {
    switch (action.type) {
      case types.ADD_TODO_LIST:
        const {key, name} = action.payload
        const newList = {
          ...initialList,
          name,
          key
        }
        draft.items = [...draft.items, newList]
        break;
      case types.ADD_TODO_ITEM:
        draft.items = [...draft.items, action.todo]
        break;
      case types.TOGGLE_TODO_LIST:
        draft.items = draft.items.map((i: TodoListType) => {
          if (i.key === action.payload.key) {
            return ({
              ...i,
              isArchived: !i.isArchived
            })
          }

          return i
        })
        break
      case types.ADD_TODO:
        draft.items = draft.items.map((i: TodoListType) => {
          if (i.key === action.payload.listKey) {
            return ({
              ...i,
              items: [
                ...i.items,
                {
                  name: action.payload.name,
                  key: action.payload.key,
                  isCompleted: false
                }
              ]
            })
          }
          return i
        })
        break;
      case types.TOGGLE_TODO:
        draft.items = draft.items.map((i: TodoListType) => {
          if (i.key === action.payload.listKey) {
            return ({
              ...i,
              items: i.items.map((t: TodoItemType) => {
                if (t.key === action.payload.key) {
                  return ({
                    ...t,
                    isCompleted: !t.isCompleted
                  })
                }

                return t
              })
            })
          }
          return i
        })
        break;
      case types.UPDATE_TODO:
        draft.items = draft.items.map((i: TodoListType) => {
          if (i.key === action.payload.listKey) {
            return ({
              ...i,
              items: i.items.map((t: TodoItemType) => {
                if (t.key === action.payload.key) {
                  return ({
                    ...t,
                    name: action.payload.name
                  })
                }

                return t
              })
            })
          }
          return i
        })
        break;
      case types.DELETE_TODO:
        draft.items = draft.items.map((i: TodoListType) => {
          if (i.key === action.payload.listKey) {
            return ({
              ...i,
              items: i.items.filter((t: TodoItemType) => t.key !== action.payload.key)
            })
          }
          return i
        })
        break;
      default:
        return state
    }
  }
)}

const reducer = {
  todos: todosReducer,
}

export default reducer
