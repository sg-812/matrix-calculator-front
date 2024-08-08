import axios from "axios";
import { base_url } from "../api_url/api_url";


let axiosInstance = axios.create({
  baseURL:base_url,
});

export const profileImage = (media) => {
  return base_url+`uploads/${media}`;
}

axiosInstance.interceptors.request.use(
    async function (config) {
      const token =window.sessionStorage.getItem("token");
      // console.log("existing token",token);
      
      if (token) {
        config.headers["x-access-token"] = token;
        // config.headers["Access-Control-Allow-Origin"]= "*" 
      }
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );


  export default axiosInstance;  







