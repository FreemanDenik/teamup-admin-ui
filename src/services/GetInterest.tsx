import { InterestDto } from '../types'

export const GetInterest = async ()=>{
// TODO получить данные с сервера
  try {
    const res = await fetch('http://localhost:8080/public/interest');
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }

    const body = await res.json();
    return body
  } catch (err) {
    return err;
  }


}