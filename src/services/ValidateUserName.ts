

export const ValidateUserName = (userName: string)=>{

  if(userName === "User") {
    console.log("Name", userName);
    return true
  } else {

    return false
  }

  return true
}

  // TODO отправить запрос на сервер когда заработает
  // try {
  //   const res = await fetch(' http://localhost:3000/check/username/{userName}');
  //   if (!res.ok) {
  //     throw new Error(`${res.status}`);
  //   }
  //   return await res.json();
  // } catch (err) {
  //   console.log(err);
  // }