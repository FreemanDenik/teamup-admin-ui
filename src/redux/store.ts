import { combineReducers, configureStore } from '@reduxjs/toolkit'

import userReducer from './reducers/user'
import servicesReducer from './reducers/servicesReducer'

const rootReducer = combineReducers({
  userReducer,
  servicesReducer
})

const store = () => {
  return configureStore({
    reducer: rootReducer
  })
}
export default store
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
