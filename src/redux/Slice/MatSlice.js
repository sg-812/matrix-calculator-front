import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mat_end } from "../../api/api_url/api_url";
import axiosInstance from "../../api/axios_instance/helper";


let create=mat_end.create;
let view=mat_end.view;
let mul=mat_end.mul;
let add=mat_end.add; 
let sub=mat_end.sub;
let dashboard=mat_end.dashboard

const initial_value={
    isLoading:false,
    status:0,
    data:[],
}

export const createMat=createAsyncThunk("matrix/createMat",
async (data)=>{
   const res= await axiosInstance.post(create,data)
   return res?.data;
})

export const viewMat=createAsyncThunk("matrix/viewMat",
async ()=>{
   const res= await axiosInstance.get(view)
   // console.log("Axios res: ",res);
   return res?.data;
})

export const addMat=createAsyncThunk("matrix/addMat",
async ()=>{
   const res= await axiosInstance.get(add)
   return res?.data;
})

export const mulMat=createAsyncThunk("matrix/mulMat",
async ()=>{
   const res= await axiosInstance.get(mul)
   return res?.data;
})
export const subMat=createAsyncThunk("matrix/subMat",
async ()=>{
   const res= await axiosInstance.get(sub)
   return res?.data;
})

export const dashboardMat=createAsyncThunk("matrix/dashboardMat",
async ()=>{
   const res= await axiosInstance.get(dashboard)
   return res?.data;
})

export const matSlice=createSlice({
    name:'matrix',
    initialState:initial_value,
   
    extraReducers:(builder)=>{
      //  createMat
       builder.addCase(createMat.pending, (state,action)=>{
         state.isLoading=true;
       })
       builder.addCase(createMat.fulfilled, (state,action)=>{
             state.isLoading=false;
       })
       builder.addCase(createMat.rejected, (state,action)=>{
         state.isLoading=false;
        console.log("Action: ",action);
       })

      //  viewMat
       builder.addCase(viewMat.pending, (state,action)=>{
        state.isLoading=true;
       })
       builder.addCase(viewMat.fulfilled, (state,action)=>{
            state.isLoading=false;
      })
       builder.addCase(viewMat.rejected, (state,action)=>{
        state.isLoading=false;
        console.log("Action: ",action);
       })

       //addMat
       builder.addCase(addMat.pending, (state,action)=>{
        state.isLoading=true;
       })
       builder.addCase(addMat.fulfilled, (state,action)=>{
        console.log("Fulfilled Action of profile: ",action);
            state.isLoading=false;                            
        }  
       )
       builder.addCase(addMat.rejected, (state,action)=>{
         state.isLoading=false;
        console.log("Action: ",action);
       })       

       //mulMat
       builder.addCase(mulMat.pending, (state,action)=>{
        state.isLoading=true;
       })
       builder.addCase(mulMat.fulfilled, (state,action)=>{
        console.log("Fulfilled Action of profile: ",action);
            state.isLoading=false;                            
        }  
       )
       builder.addCase(mulMat.rejected, (state,action)=>{
         state.isLoading=false;
        console.log("Action: ",action);
       })       

       //subMat
       builder.addCase(subMat.pending, (state,action)=>{
        state.isLoading=true;
       })
       builder.addCase(subMat.fulfilled, (state,action)=>{
        console.log("Fulfilled Action of profile: ",action);
            state.isLoading=false;                            
        }  
       )
       builder.addCase(subMat.rejected, (state,action)=>{
         state.isLoading=false;
        console.log("Action: ",action);
       })       

       //dashboardMat
       builder.addCase(dashboardMat.pending, (state,action)=>{
        state.isLoading=true;
       })
       builder.addCase(dashboardMat.fulfilled, (state,action)=>{
        console.log("Fulfilled Action of profile: ",action);
            state.isLoading=false;                            
        }  
       )
       builder.addCase(dashboardMat.rejected, (state,action)=>{
         state.isLoading=false;
        console.log("Action: ",action);
       })       
       
    }
})

export default matSlice.reducer;

