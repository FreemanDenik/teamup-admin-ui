import { IUser } from '../pages/People/types'

const getUsers = (): Promise<IUser[]> => {
  return fetch(
    'https://gist.githubusercontent.com/elena-anikina/4b19087c4a431be445040125b8f043f9/raw/'
  ).then((response: any) => {
    if (!response.ok) {
      throw new Error(`Ошибка, статус ошибки ${response.status}`)
    }
    return response.json()
  })
}

export default getUsers
