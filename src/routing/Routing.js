import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "../layout/Header";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";
import Profile from "../pages/auth/Profile";
import CreateMatrix from "../pages/matrix/CreateMatrix";
import ViewMatrix from "../pages/matrix/ViewMatrix";
import Error from "../pages/common/Error";
import PageNotFound from "../pages/common/PageNotFound";
import IsAuth from "./IsAuth";
const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />

        <Route element={<IsAuth />}>
          <Route path="profile" element={<Profile />} />
          <Route path="create-matrix" element={<CreateMatrix />} />
          <Route path="view-matrix" element={<ViewMatrix />} />
        </Route>
        <Route path="error" element={<Error />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
