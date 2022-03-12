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
  return [
      {
    id: 1,
    title: 'горные лыжи',
    shortDescription: 'короткое описание'
      },
    {
      id: 2,
      title: 'альпинизм',
      shortDescription: 'короткое описание'
    },
    {
      id: 3,
      title: 'биткоин',
      shortDescription: 'короткое описание'
    },
    {
      id: 4,
      title: 'вышивание',
      shortDescription: 'короткое описание'
    },
    {
      id: 5,
      title: 'дайвинг',
      shortDescription: 'короткое описание'
    },
    {
      id: 6,
      title: 'кино',
      shortDescription: 'короткое описание'
    },
    {
      id: 7,
      title: 'спорт',
      shortDescription: 'короткое описание'
    },
    {
      id: 8,
      title: 'программирование',
      shortDescription: 'короткое описание'
    },
    {
      id: 9,
      title: 'путешествия',
      shortDescription: 'короткое описание'
    },
    {
      id: 10,
      title: 'искусство',
      shortDescription: 'короткое описание'
    },
    {
      id: 11,
      title: 'танцы',
      shortDescription: 'короткое описание'
    },
    {
      id: 12,
      title: 'музыка',
      shortDescription: 'короткое описание'
    }
  ];
};