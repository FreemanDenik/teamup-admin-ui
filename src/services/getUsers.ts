const getUsers = () => {
    return [
        {
            id: 1,
            name: 'username',
            firstName: 'Елизавета',
            lastName: 'Власова',
            middleName: '',
            photo: 'https://images.unsplash.com/photo-1643377968159-0c7914f080dc?w=200',
            age: 24,
            role: 'user',
            email: 'nazarova@mail.ru',
            city: 'Москва',
            aboutUser: 'Красткое описание о себе',
            userInterests: [
                {id: 1, title: 'Гитара', shortDescription: 'Короткое описание'},
                {id: 1, title: 'Горные лыжи', shortDescription: 'Короткое описание'}
            ]
        },
        {
            id: 2,
            name: 'username',
            firstName: 'Иван',
            lastName: 'Иванов',
            middleName: '',
            photo: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200',
            age: 32,
            role: 'user',
            email: 'ivanov@mail.ru',
            city: 'Москва',
            aboutUser: 'Красткое описание о себе',
            userInterests: [
                {id: 2, title: 'Фотография', shortDescription: 'Короткое описание'},
                {id: 2, title: 'Путешествия', shortDescription: 'Короткое описание'},
                {id: 2, title: 'Программирование', shortDescription: 'Короткое описание'}
            ]
        },
        {
            id: 3,
            name: 'username',
            firstName: 'Максим',
            lastName: 'Козлов',
            middleName: '',
            photo: 'https://images.unsplash.com/photo-1532318065232-2ba7c6676cd5?w=200',
            age: 27,
            role: 'user',
            email: 'kozlov@mail.ru',
            city: 'Москва',
            aboutUser: 'Красткое описание о себе',
            userInterests: [
                {id: 3, title: 'Скейт-борд', shortDescription: 'Короткое описание'},
                {id: 3, title: 'Велосипед', shortDescription: 'Короткое описание'},
                {id: 3, title: 'Экстрим', shortDescription: 'Короткое описание'}
            ]
        },
        {
            id: 4,
            name: 'username',
            firstName: 'Анна',
            lastName: 'Петрова',
            middleName: '',
            photo: 'https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?w=200',
            age: 22,
            role: 'user',
            email: 'petrova@mail.ru',
            city: 'Москва',
            aboutUser: 'Красткое описание о себе',
            userInterests: [
                {id: 4, title: 'Иностранные язки', shortDescription: 'Короткое описание'},
                {id: 4, title: 'Поэзия', shortDescription: 'Короткое описание'}
            ]
        },
        {
            id: 5,
            name: 'username',
            firstName: 'Наталья',
            lastName: 'Назарова',
            middleName: '',
            photo: 'https://images.unsplash.com/photo-1618938700817-fe48bd93f20b?w=200',
            age: 29,
            role: 'user',
            email: 'nazarova@mail.ru',
            city: 'Москва',
            aboutUser: 'Красткое описание о себе',
            userInterests: [
                {id: 5, title: 'Аргентиское танго', shortDescription: 'Короткое описание'},
                {id: 5, title: 'Путешествия', shortDescription: 'Короткое описание'},
                {id: 5, title: 'Новые знакомства', shortDescription: 'Короткое описание'}
            ]
        },
        {
            id: 6,
            name: 'username',
            firstName: 'Илья',
            lastName: 'Лебедев',
            middleName: '',
            photo: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=200',
            age: 34,
            role: 'user',
            email: 'lebedeb@mail.ru',
            city: 'Москва',
            aboutUser: 'Красткое описание о себе',
            userInterests: [
                {id: 6, title: 'Блогинг', shortDescription: 'Короткое описание'},
                {id: 6, title: 'Мода', shortDescription: 'Короткое описание'}
            ]
        },
        {
            id: 7,
            name: 'username',
            firstName: 'Виктория',
            lastName: 'Сергеева',
            middleName: '',
            photo: 'https://images.unsplash.com/photo-1542305983-c4100e4b8cd2?w=200',
            age: 21,
            role: 'user',
            email: 'sergeeva@mail.ru',
            city: 'Москва',
            aboutUser: 'Красткое описание о себе',
            userInterests: [
                {id: 7, title: 'Съемка видео', shortDescription: 'Короткое описание'},
            ]
        },
        {
            id: 8,
            name: 'username',
            firstName: 'Марина',
            lastName: 'Комарова',
            middleName: '',
            photo: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=200',
            age: 27,
            role: 'user',
            email: 'komarova@mail.ru',
            city: 'Москва',
            aboutUser: 'Красткое описание о себе',
            userInterests: [
                {id: 8, title: 'Вечеринки', shortDescription: 'Короткое описание'},
                {id: 8, title: 'Новые знакомства', shortDescription: 'Короткое описание'}
            ]
        },
        {
            id: 9,
            name: 'username',
            firstName: 'Дмитрий',
            lastName: 'Минин',
            middleName: '',
            photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200',
            age: 34,
            role: 'user',
            email: 'dmitrov@mail.ru',
            city: 'Москва',
            aboutUser: 'Красткое описание о себе',
            userInterests: [
                {id: 9, title: 'Бизнес', shortDescription: 'Короткое описание'},
                {id: 9, title: 'Бег', shortDescription: 'Короткое описание'}
            ]
        }
    ];
};

export default getUsers;