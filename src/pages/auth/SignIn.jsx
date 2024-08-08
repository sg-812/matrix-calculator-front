import React from "react";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { sign_in, sign_up } from "../../redux/Slice/AuthSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const form = useForm();
  // register will track the form state
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const submitHandler = (data) => {
    console.log("Form submitted", data);

    dispatch(sign_in(data))
      .then((res) => {
        alert("You have logged in successfully");
        console.log(res);
        if (res.payload.status === 200){
          window.sessionStorage.setItem("token", res.payload.token);
          navigate('/profile')
        }
      })
      .catch((err) => {
        console.log("Error from sign up slice", err);
      });
  };

  return (
    <div>
      <h2>Sign-In</h2>
      <form onSubmit={handleSubmit(submitHandler)} noValidate>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          {...register("email")}
          autoComplete="off"
        />

        <br />
        <p>{errors.email?.message}</p>
        <br />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          {...register("password")}
          autoComplete="off"
        />

        <br />
        <p>{errors.password?.message}</p>
        <br />

        <input type="submit" value="Submit" />
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default SignIn;
