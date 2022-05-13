import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ForgetPassword from "../containers/auth/forgetpassword";
import ResetPassword from "../containers/auth/resetpassword";
import SignIn from "../containers/auth/signin";
import SignUp from "../containers/auth/signup";
import {
  SIGN_IN,
  SIGN_UP,
  FORGET_PASSWORD,
  RESET_PASSWORD,
} from "../constants/routes";

const Navigator = () => {
  return (
    <Routes>
      <Route path={SIGN_IN} element={<SignIn />} />
      <Route path={SIGN_UP} element={<SignUp />} />
      <Route path={FORGET_PASSWORD} element={<ForgetPassword />} />
      <Route path={RESET_PASSWORD} element={<ResetPassword />} />
      <Route path="*" element={<Navigate to={SIGN_IN} replace />} />
    </Routes>
  );
};

export default Navigator;
