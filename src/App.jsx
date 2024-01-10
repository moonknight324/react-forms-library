import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmitForm = (data) => {
    setSubmitted(true);
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit(onSubmitForm)}>
        {submitted && (
          <div>Registration successful!</div>
        )}
        <h1>Registration Form</h1>

        <div className="info">
          <label  className='label' htmlFor="first-name">First Name</label>
          <input
           className='inp'
            id="first-name"
            type="text"
            placeholder="First Name"
            {...register("firstName", {
              required: "First Name is required!",
            })}
          />
          <span className='errors'>{errors.firstName?.message}</span>
        </div>

        <div className="info">
          <label className='label' htmlFor="last-name">Last Name</label>
          <input
           className='inp'
            id="last-name"
            type="text"
            placeholder="Last Name"
            {...register("lastName", {
              required: "Last Name is required!",
            })}
          />
          <span className='errors'>{errors.lastName?.message}</span>
        </div>

        <div className="info">
          <label className='label' htmlFor="email">Email</label>
          <input
           className='inp'
            id="email"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email",
              },
            })}
          />
          <span className='errors'>{errors.email?.message}</span>
        </div>

        <div className="info">
          <label className='label' htmlFor="password">Password</label>
          <input
           className='inp'
            id="password"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required!",
              minLength: {
                value: 4,
                message: "Password should be more than 4 characters",
              },
              maxLength: {
                value: 20,
                message: "Password can't be more than 20 characters",
              },
            })}
          />
          <span className='errors'>{errors.password?.message}</span>
        </div>
        <button className='register' type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
