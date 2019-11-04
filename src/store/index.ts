import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import reducers from 'modules'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    // 'todos'
  ],
}

const persistedReducers = persistReducer(persistConfig, reducers)

const store = createStore(
  persistedReducers
)

const persistor = persistStore(store, null, () => {
  store.getState()
})

export { store, persistor }
