

export const ValidateUserName = (userName: string)=>{

  if(userName) {
    console.log("Name", userName);
  }
  console.log("Имя не задано");
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
