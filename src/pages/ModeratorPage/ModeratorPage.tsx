import './ModeratorPage.scss'
import { useState } from 'react'

import placeholdermoderator from '../../assets/img/placeholdermoderator.png'

const events = [
  {
    eventID: 1,
    eventName: 'Размахивание грязными тряпками',
    eventAuthor: 'Бес',
    eventPlace: 'Москва',
    eventAuthorAge: 12,
    eventAuthorEventsCount: 10,
    eventAuthorSignDate: '22.10.2002',
    eventDescriptionShort:
      'Lorem ipsum dolor sit amet confhfghsdgsectetur adipisicing elit. Recusandae aliquam illum officia a tempora fugit illo, nesciunt, minus iste cupiditate explicabo accusamus, laboriosam ratione vel. Fugit ut delectus laborum blanditiis.',
    eventDescriptionLarge:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elsdgit. Facere impedit harum dekjadbgkjsbgkjbsdglectus aliquam, non dolores cumque est architecto ad, eius adipisci corrupti deleniti quos dolorum soluta eligendi at a placeat? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ut sint culpa at sapiente modi expedita temporibus, dolores iure libero quas, suscipit possimus fugiat laudantium consequuntur explicabo dolorum nesciunt! Est.'
  },
  {
    eventID: 2,
    eventName: 'Отдирание наклеек с бананов',
    eventAuthor: 'Поставщик',
    eventPlace: 'Ижевск',
    eventAuthorAge: 11,
    eventAuthorEventsCount: 15,
    eventAuthorSignDate: '12.02.2001',
    eventDescriptionShort:
      'Lorem ipsum dolor sit amet consectetur adipisicing elqlqrhh32oi5it. Recusandae aliquam illum officia a tempora fugit illo, nesciunt, minus iste cupiditate explicabo accusamus, laboriosam ratione vel. Fugit ut delectus laborum blanditiis.',
    eventDescriptionLarge:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere impedit harum delectus klsdgnlksdnglksdnglnsdlgnsdklgnlsdnglksndglaliquam, non dolores cumque est architecto ad, eius adipisci corrupti deleniti quos dolorum soluta eligendi at a placeat? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ut sint culpa at sapiente modi expedita temporibus, dolores iure libero quas, suscipit possimus fugiat laudantium consequuntur explicabo dolorum nesciunt! Est.'
  },
  {
    eventID: 3,
    eventName: 'Покупка макбуков для уничтожения',
    eventAuthor: 'РКН',
    eventPlace: 'Москва',
    eventAuthorAge: 42,
    eventAuthorEventsCount: 16,
    eventAuthorSignDate: '23.01.2022',
    eventDescriptionShort:
      'Lorem ipsum dolor saosifhjihfo323ing elit. Recusandae aliquam illum officisdgsdga a tempora fugit illo, nesciunt, minus iste cupiditate explicabo accusamus, laboriosam ratione vel. Fugit ut delectus laborum blanditiis.',
    eventDescriptionLarge:
      'asfasfg2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facsdgsdgdsgsdgere impedit harum delectus aliquam, non dolores cumque est architecto ad, eius adipisci corrupti deleniti quos dolorum soluta eligendi at a placeat? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ut sint culpa at sapiente modi expedita temporibus, dolores iure libero quas, suscipit possimus fugiat laudantium consequuntur explicabo dolorum nesciunt! Est.'
  },
  {
    eventID: 4,
    eventName: 'Сливание общего бюджета проекта',
    eventAuthor: 'ТимЛид',
    eventPlace: 'Москва',
    eventAuthorAge: 5,
    eventAuthorEventsCount: 19,
    eventAuthorSignDate: '06.02.2021',
    eventDescriptionShort:
      'Lorem ipsum doloaskjfbkjasfbjkasbfkr sit amet consectetur adipisicing elit. Recusandae aliquam illum officia a tempora fugit illo, nesciunt, minus iste cupiditate explicabo accusamus, laboriosam ratione vel. Fugit ut delectus laborum blanditiis.',
    eventDescriptionLarge:
      'Loreaskjfbkjasfbkasbjfkbasjkfbjkasfbjkasbfbjkasfvasbvfkvaskfasfjkasbfbaksjfbjkasbfkjabsfkbaskfbaskjfasbjfkjasfbkjasbfasjkfbaksfbkasbfkjasbfkbaskjfbakjsnfkasklfnalksnflksdbgklbdsfgklndfkjgndflkbgkldfnbgkjdfngjkbdfkjgbdfkjgnkjerbglkewbgklsdngkbsdlkgbsdkjgbljsdbgjklsbgkewbgjkbwekjgbkjwebglbsdkjgbjksdbgkjsdbgljwebgbwekhgbwelgbkjsdbgkjsdbgkjsdbgbsdkjgbsdkgjbskdjgbm ipsum dsafnasfnlasolor sit amet, consectetur adipisicing elit. Facere impedit harum defdlgnlkdfglectus aliquam, non dolores cumque est architecto ad, eius adipisci corrupti deleniti quos dolorum soluta eligendi at a placeat? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ut sint culpa at sapiente modi expedita temporibus, dolores iure libero quas, suscipit possimus fugiat laudantium consequuntur explicabo dolorum nesciunt! Est.'
  }
]

const initialState = {
  eventID: 0,
  eventName: 'INITIAL',
  eventAuthor: 'INITIAL',
  eventPlace: 'INITIAL',
  eventAuthorAge: 1,
  eventAuthorEventsCount: 0,
  eventAuthorSignDate: '00.00.0000',
  eventDescriptionShort: 'INITIAL',
  eventDescriptionLarge: 'INITIAL'
}

export const ModeratorPage = () => {
  const [selectedEvent, changeSelectedEvent] = useState(initialState)
  return (
    <>
      <header className="header">
        <h6 className="header__logo">TeamUp Group</h6>
        <button className="header__exit">Выйти</button>
      </header>
      <section className="section">
        <aside className="moderator__info">
          <div className="moderator__meta">
            <img
              src={placeholdermoderator}
              alt=""
              className="moderator__avatar"
            />
            <h6 className="moderator__name">Валентина Краснова</h6>
          </div>
          <select className="moderator__status" name="moderator__status">
            <option value="ready">Готов</option>
            <option value="not-ready">Не готов</option>
          </select>
          <ul className="moderator__events">
            {events.map((event) => (
              <li
                className={
                  event.eventID === selectedEvent.eventID
                    ? 'event event-active'
                    : 'event'
                }
                key={event.eventID}
                onClick={() => changeSelectedEvent(event)}
              >
                <div className="event__info">
                  <h4 className="event__name">{event.eventName}</h4>
                  <h6 className="event__author">Автор: {event.eventAuthor}</h6>
                  <h6 className="event__place">Город: {event.eventPlace}</h6>
                </div>
                <div className="event__timer">
                  {/* Как только событие подгрузилось (было получено) */}
                  <h4 className="event__timer-left">0:00</h4>
                  {/* Время обслуживания (пока находишься на этом мероприятии) */}
                  <h4 className="event__timer-right">0:05</h4>
                </div>
              </li>
            ))}
          </ul>
        </aside>
        <main className="event__section">
          <div className="event__section-header">
            <div className="event__author-meta">
              <h4 className="event__author-name">
                {selectedEvent.eventAuthor}
              </h4>
              <h6 className="event__author-age">
                {selectedEvent.eventAuthorAge} лет
              </h6>
              <h6 className="event__author-events_count">
                {selectedEvent.eventAuthorEventsCount} мероприятий
              </h6>
            </div>
            <h6 className="event__author-sign_date">
              Дата регистрации: {selectedEvent.eventAuthorSignDate}
            </h6>
            <a href="" className="event__author-card">
              Открыть карточку пользователя
            </a>
          </div>
          <div className="event__section-body">
            <div className="event__section-meta">
              <img
                src={placeholdermoderator}
                alt=""
                className="event__section-img"
              />
              <div className="event__section-info">
                <h3 className="event__section-info_name">
                  {selectedEvent.eventName}
                </h3>
                <h4 className="event__section-info_meta">Место проведения:</h4>
                <h4 className="event__section-info_meta">Город:</h4>
                <h4 className="event__section-info_meta">Время проведения:</h4>
                <h4 className="event__section-info_meta">
                  Маркер приватности:
                </h4>
                <h4 className="event__section-info_meta">Тип мероприятия:</h4>
                <h4 className="event__section-info_meta">
                  Минимальный возраст:
                </h4>
              </div>
            </div>
            <div className="event__section-description">
              <div className="event__section-description_short">
                <h3 className="event__section-description_title">
                  Краткое описание
                </h3>
                <textarea
                  className="event__section-description_short-textarea"
                  readOnly
                  value={selectedEvent.eventDescriptionShort}
                />
              </div>
              <div className="event__section-description_large">
                <h3 className="event__section-description_title">
                  Описание мероприятия
                </h3>
                <textarea
                  className="event__section-description_large-textarea"
                  readOnly
                  value={selectedEvent.eventDescriptionLarge}
                />
              </div>
            </div>
            <div className="event__section-buttons">
              <button className="event__section-buttons_deny">Отклонить</button>
              <button className="event__section-buttons_approve">
                Разрешить
              </button>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}
