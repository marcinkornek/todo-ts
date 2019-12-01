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
        items: state.items.map((i: TodoListType) => {
          if (i.key === action.payload.key) {
            return ({
              ...i,
              isArchived: !i.isArchived
            })
          }
        return i
      })}
    case types.ADD_TODO:
      return {
        ...state,
        items: state.items.map((i: TodoListType) => {
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
      })}
    case types.TOGGLE_TODO:
      console.log('====================================');
      console.log('TOGGLE_TODO', action);
      console.log('TOGGLE_TODO', state.items);
      console.log('====================================');

      return {
        ...state,
        items: state.items.map((i: TodoListType) => {
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
      })}
    case types.UPDATE_TODO:
      return {
        ...state,
        items: state.items.map((i: TodoListType) => {
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
      })}
    case types.DELETE_TODO:
      return {
        ...state,
        items: state.items.map((i: TodoListType) => {
          if (i.key === action.payload.listKey) {
            return ({
              ...i,
              items: i.items.filter((t: TodoItemType) => t.key !== action.payload.key)
            })
          }
        return i
      })}
    default:
      return state
  }
}

const reducer = {
  todos: todosReducer,
}

export default reducer
