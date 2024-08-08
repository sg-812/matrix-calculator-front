import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Slice/AuthSlice";
import MatReducer from  './Slice/MatSlice';


const store=configureStore({
    reducer:{
       auth:AuthReducer,
       mat:MatReducer
    }
})

export default store;