import store from '../redux/store'

import user from './localServerAPI/user.json'

import { Dto } from '../types'

const getUserEvents = async (id: Dto) => {
  try {
    const res = await fetch(
      `http://localhost:8080/public/user/event/${id}/owner`
    )
    if (!res.ok) throw new Error(`${res.status}`)
    return res.json()
  } catch (err) {
    return err
  }
}

export default getUserEvents
