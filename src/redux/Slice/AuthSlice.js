import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth_end } from "../../api/api_url/api_url";
import axiosInstance from "../../api/axios_instance/helper";


let reg_url=auth_end.reg ;
let login_url=auth_end.login; 
let profile_url=auth_end.profile;
// let edit_profile=auth_end.edit_profile;

const initial_value={
    isLoading:false,
    status:0,
    data:[]
}

export const sign_up=createAsyncThunk("user/sign_up",
async (userdata)=>{
   const res= await axiosInstance.post(reg_url,userdata)
   return res?.data;
})

export const sign_in=createAsyncThunk("user/sign_in",
async (userdata)=>{
   const res= await axiosInstance.post(login_url,userdata)
   // console.log("Axios res: ",res);
   return res?.data;
})

export const profile=createAsyncThunk("user/profile",
async ()=>{
   const res= await axiosInstance.get(profile_url)
   return res?.data;
})

export const authSlice=createSlice({
    name:'user',
    initialState:initial_value,
   
    extraReducers:(builder)=>{
      // sign up
       builder.addCase(sign_up.pending, (state,action)=>{
         state.isLoading=true;
       })
       builder.addCase(sign_up.fulfilled, (state,action)=>{
      //   console.log("Fulfilled Action for sign up: ",action);
        if(action.payload.status===200){
            state.isLoading=false;
            state.status=action.payload.status;
            state.data=action.payload.data;                     
         } 
       })
       builder.addCase(sign_up.rejected, (state,action)=>{
        // console.log("Rejected Action for sign up: ",action);
        state.isLoading=false;
        console.log("Action: ",action);
       })

      //  sign in
       builder.addCase(sign_in.pending, (state,action)=>{
        state.isLoading=true;
       })
       builder.addCase(sign_in.fulfilled, (state,action)=>{
      //   console.log("Fulfilled Action for sign in: ",action);
        if(action.payload.status===200){
            state.isLoading=false;
            state.status=action.payload.status;
            state.data=action.payload.data;                     
        }           
       })
       builder.addCase(sign_in.rejected, (state,action)=>{
        // console.log("Rejected Action for sign in: ",action);
        state.isLoading=false;
        console.log("Action: ",action);
       })

       //profile
       builder.addCase(profile.pending, (state,action)=>{
        state.isLoading=true;
       })
       builder.addCase(profile.fulfilled, (state,action)=>{
        console.log("Fulfilled Action of profile: ",action);
            state.isLoading=false;                            
        }  
       )
       builder.addCase(profile.rejected, (state,action)=>{
        // console.log("Rejected Action of profile: ",action);
        state.isLoading=false;
        console.log("Action: ",action);
       })       
       
    }
})

export default authSlice.reducer;

