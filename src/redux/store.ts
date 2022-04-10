import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user"

const rootReducer = combineReducers({
    userReducer
})

const store = () =>{
    return configureStore({
        reducer: rootReducer
    })
}
export default store
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']