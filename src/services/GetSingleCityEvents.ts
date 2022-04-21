import store from '../redux/store'

import events from './localServerAPI/events.json'

const GetSingleCityEvents = async (city: string) => {
  if (store().getState().servicesReducer.apiFlagLocal) return events //для использования локальных данных вместо сервера
  try {
    const res: any = await fetch(
      `http://localhost:8080/public/event/city/${city}`
    )
    if (!res.ok) {
      throw new Error(`${res.status}`)
    }
    const body = await res.json()
    return body
  } catch (err) {
    console.log(err)
  }
}
export default GetSingleCityEvents
