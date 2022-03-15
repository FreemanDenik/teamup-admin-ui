export const GetInterest = async () => {
  try {
    const res = await fetch("http://localhost:8080/public/interest");
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }

    const body = await res.json();
    return body;
  } catch (err) {
    return err;
  }
};

// /public/interest/ GET
export const getInterests = () => {
  return fetch('https://gist.githubusercontent.com/elena-anikina/852403ab0b258b332fd53206d5d5b48c/raw/')
      .then((response) => {
        if(!response.ok) {throw new Error(`Ошибка, статус ошибки ${response.status}`)}
        return response.json();
      })
};