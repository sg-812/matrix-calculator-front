import React ,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { profile } from '../../redux/Slice/AuthSlice';
import { profileImage } from '../../api/axios_instance/helper';

const Profile = () => {
  let [data,setData]=useState({img_url:"",email:""})
  let dispatch=useDispatch();
  let navigate=useNavigate();
  useEffect(()=>{
    dispatch(profile())
    .then(res=>{
       console.log("Axios res: ",res);
       if(res)
       {        
        let imgUrl= profileImage(res.payload.data.profile_image)
        
        setData({...data,    
            img_url:imgUrl,
            email:res.payload.data.email
          })
        }
        else{
          alert("No such user found");
          navigate('/sign-in')          
        } 
           
    })
    .catch(err=>{
       console.log("Axios err: ",err);
    })
  },[])

  let loggingOut=()=>{
    window.sessionStorage.clear();
    alert("Logged out successfully");
    navigate("/sign-in")
  }

  return (
    <div>
      <h2>Hello {data?.email}</h2>
    </div>
  )
}

export default Profile