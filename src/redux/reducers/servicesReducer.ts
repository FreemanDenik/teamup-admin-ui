import { createSlice } from '@reduxjs/toolkit'

import { servicesReducer } from '../../types'

const initialState: servicesReducer = {
  apiFlagLocal: true
}

export const serviceSlice = createSlice({
  name: 'APIFlag',
  initialState,
  reducers: {
    apiFlag(state, action) {
      return (state = action.payload)
    }
  }
})

export default serviceSlice.reducer
export const { apiFlag } = serviceSlice.actions
