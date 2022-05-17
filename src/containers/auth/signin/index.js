import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { InputWithLabel } from "../../../components";
import {  INVALID_EMAIL_FORMAT, INVALID_PASSWORD } from "../../../constants/messages";
import { DASHBOARD, FORGET_PASSWORD, SIGN_UP } from "../../../constants/routes";
import { SigninApiCall, ValidateEmail, ValidatePassword } from "../../../helpers";
import "./style.css";

const SignIn = () => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const [loader, setLoader] = React.useState(false);

  const handleChange = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };
  const navigate = useNavigate()



  const onPressLogin = () => {
    if(!ValidateEmail(state.email,INVALID_EMAIL_FORMAT)) return false
    if (!ValidatePassword(state.password,INVALID_PASSWORD)) return false
    setLoader(true)

    SigninApiCall(state)
      .then((data) => {
        if(Object.keys(data).length) navigate(DASHBOARD)
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => {
        setLoader(false)
      }
      )
  };
  return (
    <div className="overlay">
      <div className="screen-container">
        <div className="screen-content">
          <div className="screen-content-header">
            <h1>Sign In</h1>
          </div>
          <div className="screen-content-body">
            <div className="form-container">
              <form>
                <InputWithLabel
                  label="Username"
                  value={state.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                <InputWithLabel
                  label="Password"
                  value={state.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                />
                <div className="submitbuttoncontainer-login">
                  <Button
                    variant="primary"
                    type="button"
                    disabled={loader}
                    onClick={onPressLogin}
                    style={{ width: "50%" }}
                  >
                    Sign In
                  </Button>
                </div>
              </form>
            </div>
            <div className="signup-container">
              <p>
                Don't have an account?{" "}
                <span className="signup-link">
                  <Link to={SIGN_UP}>Sign Up</Link>
                </span>
              </p>
            </div>
            <div className="signup-container">
              <p>
                Forgot Password?{" "}
                <span className="signup-link">
                  <Link to={FORGET_PASSWORD}>Reset Now</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
