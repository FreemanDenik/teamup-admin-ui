import { InterestDto } from '../types'

export const GetInterest = () : InterestDto[]=>{
// TODO получить данные с сервера
  /*try {
    const res = await fetch(' https://localhost:3000/public/interest);
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    return await res.json();
  } catch (err) {
    return err;
  }*/

  return [
    {id:1, title:"Игры", shortDescription: "Увлечение играми"},
    {id:2, title:"Спорт", shortDescription: "Увлечение спортом"},
    {id:3, title:"Музыка", shortDescription: "Увлечение музыкой"},
    {id:4, title:"Кулинария", shortDescription: "Люблю готовить"},
    {id:5, title:"Альпинизм", shortDescription: "Все выше и выше"},
    {id:6, title:"Танцы", shortDescription: "Танцуют все!"},
  ]
}