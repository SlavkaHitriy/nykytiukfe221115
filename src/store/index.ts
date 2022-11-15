import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './slices/usersSlice'

const reducer = combineReducers({users: usersSlice})

export const setupStore = () => configureStore({reducer})

export type RootState = ReturnType<typeof reducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
