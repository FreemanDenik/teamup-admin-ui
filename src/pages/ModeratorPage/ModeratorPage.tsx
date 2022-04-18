import './ModeratorPage.scss'
import placeholdermoderator from '../../assets/img/placeholdermoderator.png'

export const ModeratorPage = () => (
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
          <li className="event">
            <div className="event__info">
              <h4 className="event__name">Название мероприятия</h4>
              <h6 className="event__author">Автор: Мелькина Анастасия</h6>
              <h6 className="event__place">Город: Москва</h6>
            </div>
            <div className="event__timer">
              <h4 className="event__timer-left">0:00</h4>
              <h4 className="event__timer-right">0:05</h4>
            </div>
          </li>
          <li className="event event-disabled">
            <div className="event__info">
              <h4 className="event__name">Название мероприятия</h4>
              <h6 className="event__author">Автор: Мелькина Анастасия</h6>
              <h6 className="event__place">Город: Москва</h6>
            </div>
            <div className="event__timer">
              <h4 className="event__timer-left">0:00</h4>
              <h4 className="event__timer-right">0:05</h4>
            </div>
          </li>
          <li className="event">
            <div className="event__info">
              <h4 className="event__name">Название мероприятия</h4>
              <h6 className="event__author">Автор: Мелькина Анастасия</h6>
              <h6 className="event__place">Город: Москва</h6>
            </div>
            <div className="event__timer">
              <h4 className="event__timer-left">0:00</h4>
              <h4 className="event__timer-right">0:05</h4>
            </div>
          </li>
        </ul>
      </aside>
      <main className="event__section">
        <div className="event__section-header">
          <div className="event__author-meta">
            <h4 className="event__author-name">Мелькина Анастасия</h4>
            <h6 className="event__author-age">19 лет</h6>
            <h6 className="event__author-events_count">13 мероприятий</h6>
          </div>
          <h6 className="event__author-sign_date">
            Дата регистрации: 13.05.2021
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
              <h3 className="event__section-info_name">Название мероприятия</h3>
              <h4 className="event__section-info_meta">Место проведения:</h4>
              <h4 className="event__section-info_meta">Город:</h4>
              <h4 className="event__section-info_meta">Время проведения:</h4>
              <h4 className="event__section-info_meta">Маркер приватности:</h4>
              <h4 className="event__section-info_meta">Тип мероприятия:</h4>
              <h4 className="event__section-info_meta">Минимальный возраст:</h4>
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
                value="Краткое описание"
              />
            </div>
            <div className="event__section-description_large">
              <h3 className="event__section-description_title">
                Описание мероприятия
              </h3>
              <textarea
                className="event__section-description_large-textarea"
                readOnly
                value="Описание мероприятия"
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
