import { combineReducers, configureStore } from '@reduxjs/toolkit'

import userReducer from './reducers/user'
import servicesReducer from './reducers/servicesReducer'

const rootReducer = combineReducers({
  userReducer,
  servicesReducer
})

const logger = (store: { getState: () => any }) => (next: (arg0: any) => any) => (actions: any) => {
  const res = next(actions);
  console.log('User', store.getState().userReducer);
  return res;
};

const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: [logger]
  })
}

export default store
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
