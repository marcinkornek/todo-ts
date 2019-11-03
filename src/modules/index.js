import { combineReducers } from 'redux'

import todosReducer from './todos'

const appReducer = combineReducers({
  ...todosReducer,
})

export default appReducer
