import { UserDtoRedux } from '../../types'
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserDtoRedux = {
    id: 1,
    token: '',
    name: '',
    firstName: 'Иван',
    lastName: 'Иванов',
    middleName: 'Иванович',
    email: '',
    city: '',
    aboutUser: '',
    userInterests: [],
    age: 18,
    role: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
    }
})

export default userSlice.reducer;