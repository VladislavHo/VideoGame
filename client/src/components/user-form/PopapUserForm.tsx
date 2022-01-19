import React from "react";
import { useForm } from "react-hook-form";

export default function PopapUserForm({isClose}:any) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  }: any = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    isClose()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          })}
        />
      </label>

        {errors?.firstName && <p style={{color: 'red'}}>{errors?.firstName?.message || "Error!"}</p>}

      <label htmlFor="lastName">
        Last Name:
        <input {...register("lastName")} />
      </label>

      <label htmlFor="email">
        Email:
        <input
        // type = 'email'
          {...register("email", {
            pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            required: "Неверная почта!",
          })}
        />
      </label>

        {errors?.email && <p style={{color: 'red'}}>{errors?.email?.message}</p>}

      <button type="submit" disabled={!isValid}>
        Ok
      </button>
    </form>
  );
}
