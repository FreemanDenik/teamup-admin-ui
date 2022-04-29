import {useState} from 'react'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form';

import Interests from '../../../components/Interests'

import { RootState } from '../../../redux/store'
import Input from './input'
import CityField from './CityField'

import s from '../PersonalArea.module.scss'

interface PersonalAreaProps {
  modalActivate: boolean
  setModalActivate(value: boolean): void
}

const Modal = ({ modalActivate, setModalActivate }: PersonalAreaProps) => {
  const { firstName, lastName, email, age, city, username, aboutUser } =
    useSelector((state: RootState) => state.userReducer.userDto)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formState, setFormState] = useState({
    lastNameValue: lastName,
    firstNameValue:firstName,
    emailValue: email,
    ageValue: age,
    usernameValue: username,
    aboutUserValue: aboutUser
  });

  
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div
      className={modalActivate ? `${s.modal} ${s.active}` : s.modal}
      onClick={() => setModalActivate(false)}
    >
      <div
        className={
          modalActivate ? `${s.modal_content} ${s.active}` : s.modal_content
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div onClick={() => setModalActivate(false)} className={s.close}></div>
        <h2>Редактирование пользователя</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputsWrapper}>
            <div className={s.modal_content__name}>
              <Input
                value={lastName}
                errors={errors}
                placeholder="Фамилия"
                type="text"
                {...register('Фамилия', {
                  required: true,
                  pattern: {
                    value: /[а-яa-z]/gi,
                    message: 'Некорректная фамилия'
                  }
                })}
              />
              <Input
                value={firstName}
                errors={errors}
                placeholder="Имя"
                type="text"
                {...register('Имя', {
                  required: true,
                  pattern: {
                    value: /[а-яa-z]/gi,
                    message: 'Некорректное имя'
                  }
                })}
              />
            </div>
            <Input
              value={email}
              errors={errors}
              placeholder="Email Address"
              type="email"
              {...register('email', {
                required: true,
                pattern: {
                  value: /\w+@\w+\.\w+/gi,
                  message: 'Некорректный email'
                }
              })}
            />
            <Input
              value={username}
              errors={errors}
              placeholder="Username"
              type="text"
              {...register('Username', {
                required: true,
                pattern: {
                  value: /[а-яa-z]/gi,
                  message: 'Некорректный username'
                },
              })}
            />
            <div className={s.modal_content__cityAndAge}>
              <CityField
                city={city}
                {...register('Город', {
                  required: true,
                })}
              />
              <Input
                value={`${age}`}
                errors={errors}
                placeholder="Возраст"
                type="number"
                {...register('Возраст', {
                  required: true,
                })}
              />
            </div>
          </div>
          <div className={s.modal_content__aboutUs}>
            <div className={s.modal_content__title}>О себе</div>
            <div className={s.modal_content__aboutUs__field}>
              <textarea
                value={aboutUser}
                placeholder="Например: Увлекаюсь настольными играми и люблю активный отдых на природе"
                {...register('AboutUs')}
              />
            </div>
          </div>
          <div className={s.modal_content__interests}>
            <div className={s.modal_content__title}>Интересы</div>
            <Interests />
          </div>
          <div className={s.modal_content__btn}>
            <button type="submit" className={s.btnFill}>
              Редактировать
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal
