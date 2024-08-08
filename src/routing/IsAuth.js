import React from 'react';
import {Navigate,Outlet} from 'react-router-dom';

const ProtectedRoutes = () => {
const isAuthToken=window.sessionStorage.getItem('token')
//  console.log("Value of AuthToken: ",isAuthToken);

  return isAuthToken ? <Outlet/> : <Navigate to ="/error"/>;
};

export default ProtectedRoutes;