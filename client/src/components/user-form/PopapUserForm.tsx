import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { MyContext } from "../../App";
import { UpdateIsAuthAction } from "../../store/actions";
import { createUser, login } from "../../store/api";

import "./popap-user-form.scss";

export default function PopapUserForm({ isClose }: any) {
  const dispatch = useDispatch();
  const { isAuth } = useContext(MyContext);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    if (!isAuth) {
      dispatch(createUser(data));
      dispatch(UpdateIsAuthAction(true));
    } else {
      dispatch(login(data));
    }

    reset();
    isClose();
  };

  return (
    <div className="window-form">
      <form className="auth-user" onSubmit={handleSubmit(onSubmit)}>
        {!isAuth && (
          <>
            <label htmlFor="firstName">
              <fieldset>
                <legend>First Name</legend>
                <input
                  className="form-user"
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
                  })}
                />
              </fieldset>
              {errors?.firstName && (
                <p style={{ color: "red" }}>
                  {errors?.firstName?.message || "Error!"}
                </p>
              )}
            </label>

            <label htmlFor="lastName">
              <fieldset>
                <legend>Last Name</legend>
                <input className="form-user" {...register("lastName")} />
              </fieldset>
            </label>
          </>
        )}

        <label htmlFor="email">
          <fieldset>
            <legend>Email</legend>
            <input
              className="form-user"
              type={'email'}
              {...register("email", {
                pattern:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                required: "Неверная почта!",
              })}
            />
          </fieldset>
        </label>

        {errors?.email && (
          <p style={{ color: "red" }}>{errors?.email?.message}</p>
        )}

        <label htmlFor="password">
          <fieldset>
            <legend>Password</legend>
            <input
              className="form-user"
              type={"password"}
              {...register("password", {
                required: "Поле обязательно для заполнения!",
                minLength: {
                  value: 6,
                  message: "Должно быть не менее 6 символов",
                },
                maxLength: {
                  value: 20,
                  message: "Пароль может быть из не более 20 символов",
                },
              })}
            />
          </fieldset>
        </label>
        {errors?.password && (
          <p style={{ color: "red" }}>{errors?.password?.message}</p>
        )}

        <button type="submit" disabled={!isValid}>
          Ok
        </button>
        <button onClick={isClose}>Х</button>
        {!isAuth ? (
        <button onClick={() => dispatch(UpdateIsAuthAction(true))}>Вход</button>
      ) : (
        <button onClick={() => dispatch(UpdateIsAuthAction(false))}>
          Регистрация
        </button>
      )}
      </form>

    </div>
  );
}
