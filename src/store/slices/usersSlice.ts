import { createSlice } from '@reduxjs/toolkit'
import {IUser} from '../../models/User'

export type UsersState = {
    users: IUser[]
}

const initialState: UsersState = {
    users: [],
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action) {
            state.users = action.payload
        },
    }
})

export default usersSlice.reducer
export const { setUsers } = usersSlice.actions
