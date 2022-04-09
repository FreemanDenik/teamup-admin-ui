const GetCitiList = async () => {
  {
    try {
      const res: any = await fetch(
        'http://localhost:8080/api/public/check/city'
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
}
export default GetCitiList

// server.ru/city
