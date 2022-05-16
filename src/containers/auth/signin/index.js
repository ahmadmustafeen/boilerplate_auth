import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { InputWithLabel } from "../../../components";
import { API_ENDPOINTS } from "../../../constants";
import { FORGET_PASSWORD, SIGN_UP } from "../../../constants/routes";
import "./style.css";

const SignIn = () => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };
  const onPressLogin = () => {
    if (state.username === "" || state.password === "") {
      return alert("Please fill all the fields");
    }
    axios
      .post(API_ENDPOINTS.LOGIN, state)
      .then((res) => {
        const { data } = res;
        if (data.status) {
          alert("Login Successful");
        } else {
          alert("Login Failed");
        }
      })
      .catch((err) => {
        alert("Login Failed");
      });
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
