import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { MyContext } from "../../App";
import { UpdateIsAuthAction } from "../../store/actions";
import {createUser, login} from '../../store/api'

import './popap-user-form.scss'

export default function PopapUserForm({isClose}:any) {
  const dispatch = useDispatch()
  const {isAuth} = useContext(MyContext)
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  console.log(isAuth)
  const onSubmit = (data) => {
    if(!isAuth) {
      dispatch(createUser(data))
      dispatch(UpdateIsAuthAction(true))
    }else{
      dispatch(login(data))
    }

    

    reset();
    isClose()
  };

  return (
    <><form onSubmit={handleSubmit(onSubmit)}>
      {!isAuth && (
        <>
          <label htmlFor="firstName">
            First Name:
            <input
              {...register("firstName", {
                required: "Поле обязательно для заполнения!",
                minLength: {
                  value: 2,
                  message: "Минимум 2 символа",
                },
                maxLength: {
                  value: 20,
                  message: "Максимум 20 символов",
                },
              })} />
          </label>

          {errors?.firstName && <p style={{ color: 'red' }}>{errors?.firstName?.message || "Error!"}</p>}

          <label htmlFor="lastName">
            Last Name:
            <input {...register("lastName")} />
          </label>
        </>
      )}


      <label htmlFor="email">
        Email:
        <input
          // type = 'email'
          {...register("email", {
            pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            required: "Неверная почта!",
          })} />
      </label>

      {errors?.email && <p style={{ color: 'red' }}>{errors?.email?.message}</p>}

      <label htmlFor="password">
        Password:
        <input type={'password'} {...register("password", {
          required: "Поле обязательно для заполнения!",
          minLength: {
            value: 6,
            message: 'Должно быть не менее 6 символов',
          },
          maxLength: {
            value: 20,
            message: 'Пароль может быть из не более 20 символов'
          }
        })} />
      </label>
      {errors?.password && <p style={{ color: 'red' }}>{errors?.password?.message}</p>}


      <button type="submit" disabled={!isValid}>
        Ok
      </button>
      <button onClick={isClose}>Х</button>

    </form>
        {!isAuth ? (
          <button onClick={() => dispatch(UpdateIsAuthAction(true))}>Вход</button>
        ) :
        (<button onClick={() => dispatch(UpdateIsAuthAction(false))}>Регистрация</button>)
      }
    </>
  );
}

