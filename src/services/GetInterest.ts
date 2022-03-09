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