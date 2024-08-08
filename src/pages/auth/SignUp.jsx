import React from "react";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { sign_up } from "../../redux/Slice/AuthSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const form = useForm();
  // register will track the form state
  const { register, control, handleSubmit,formState } = form;
  const {errors}=formState;
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const submitHandler = (data) => {
    console.log("Form submitted", data);
    let formData=new FormData();
    formData.append('email',data.email)
    formData.append('password',data.password)
    formData.append('profile_image',data.profile_image[0])

    dispatch(sign_up(formData))
    .then(res=>{
          alert("You have registered successfully,check your email");   
          navigate('/sign-in')     
    })
    .catch(err=>{
         console.log("Error from sign up ",err);
    });
  };
  
  return (
    <div>
      <h2>Sign-Up</h2>
      <form onSubmit={handleSubmit(submitHandler)} noValidate>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          {...register("email", {
            pattern: {
              value: /^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$/,
              message: "* Wrong pattern",
            },
          })}
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
          {...register("password",{
            required:{
              value:true,
              message:"* Password is required"
            }
          })}
          autoComplete="off"
        />

        <br />
        <p>{errors.password?.message}</p>
        <br />

        <label htmlFor="profile_image">Profile Image: </label>
        <input
          type="file"
          id="profile_image"
          {...register('profile_image')}
          name="profile_image"
        />

        <br />       

        <input type="submit" value="Submit" />
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default SignUp;
