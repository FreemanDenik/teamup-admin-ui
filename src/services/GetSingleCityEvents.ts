const GetSingleCityEvents = async (city:string) => {
  try {
      const res: any = await
        fetch(`http://localhost:8080/public/event/city/${city}`);
      if (!res.ok) {
        throw new Error(`${res.status}`);
      }
      const body = await res.json();
      return body;
    } catch (err) {
      console.log(err);
    }
};
export default GetSingleCityEvents;