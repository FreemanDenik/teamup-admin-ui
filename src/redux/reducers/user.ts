import { createSlice } from '@reduxjs/toolkit'

import { UserDtoRedux } from '../../types'

const initialState: UserDtoRedux = {
  token: '',
  userDto: {
    id: 0,
    username: '',
    firstName: 'Иван',
    lastName: 'Иванов',
    middleName: 'Иванович',
    photo: 'https://images.unsplash.com/photo-1532318065232-2ba7c6676cd5?w=200',
    email: '',
    city: 'Москва',
    aboutUser: '',
    userInterests: [
      {
        'id': 1,
        'title': 'горные лыжи',
        'shortDescription': 'короткое описание'
      },
      {
        'id': 2,
        'title': 'альпинизм',
        'shortDescription': 'короткое описание'
      },
      {
        'id': 3,
        'title': 'биткоин',
        'shortDescription': 'короткое описание'
      },
      {
        'id': 4,
        'title': 'горные лыжи',
        'shortDescription': 'короткое описание'
      },
      {
        'id': 5,
        'title': 'альпинизм',
        'shortDescription': 'короткое описание'
      },
      {
        'id': 6,
        'title': 'биткоин',
        'shortDescription': 'короткое описание'
      },
      {
        'id': 7,
        'title': 'горные лыжи',
        'shortDescription': 'короткое описание'
      },
      {
        'id': 8,
        'title': 'альпинизм',
        'shortDescription': 'короткое описание'
      }
    ],
    age: 18,
    role: ''
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userDTO(state, action) {
      return (state = action.payload)
    }
  }
})

export default userSlice.reducer
export const { userDTO } = userSlice.actions
