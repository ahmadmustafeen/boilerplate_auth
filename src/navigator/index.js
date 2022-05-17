import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ForgetPassword from "../containers/auth/forgetpassword";
import ResetPassword from "../containers/auth/resetpassword";
import SignIn from "../containers/auth/signin";
import SignUp from "../containers/auth/signup";
import Home from "../containers/dashboard/home";
import {
  SIGN_IN,
  SIGN_UP,
  FORGET_PASSWORD,
  RESET_PASSWORD,
  OTP_SCREEN,
  DASHBOARD,
} from "../constants/routes";
import OtpScreen from "../containers/auth/otp";

const ProtectedRoutes = ({ user, children }) => {
  if (!user) {
    return <Navigate to={SIGN_IN} replace />
  }
  return children;
}

const Navigator = () => {
  return (
    <Routes>
      <Route path={SIGN_IN} element={<SignIn />} />
      <Route path={SIGN_UP} element={<SignUp />} />
      <Route path={FORGET_PASSWORD} element={<ForgetPassword />} />
      <Route path={RESET_PASSWORD} element={<ResetPassword />} />
      <Route path={OTP_SCREEN} element={<OtpScreen />} />
      <Route path={DASHBOARD} element={
        <ProtectedRoutes user={false}>
          <Home />
        </ProtectedRoutes>
      } />
      <Route path="*" element={<Navigate to={SIGN_IN} replace />} />
    </Routes>
  );
};

export default Navigator;
