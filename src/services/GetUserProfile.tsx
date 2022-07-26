import store from '../redux/store'

import user from './localServerAPI/user.json'

import { Dto } from '../types'

const getUserProfile = async (id: Dto) => {
  try {
    if (store().getState().servicesReducer.apiFlagLocal) return user //для использования локальных данных вместо сервера
    const res = await fetch(`http://localhost:8080/public/user/id/${id}`)
    if (!res.ok) throw new Error(`${res.status}`)
    return res.json()
  } catch (err) {
    return err
  }
}

export default getUserProfile
