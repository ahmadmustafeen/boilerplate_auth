import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { InputWithLabel } from "../../../components";
import { SIGN_IN } from "../../../constants/routes";
import { SignUpApiCall } from "../../../helpers";

const SignUp = () => {
  const [state, setState]  = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const handleChange = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };
const signUp = () => {
  if (state.email === "" || state.password === "" || state.confirmPassword === "" || state.firstName === "" || state.lastName === "" || state.phoneNumber === "") {
    return alert("Please fill all the fields");
  }
  if (state.password !== state.confirmPassword) {
    return alert("Password and Confirm Password do not match");
  }
  SignUpApiCall(state).then((data) => {
    console.log(data);
  }
  ).catch((err) => {
    console.log(err);
  }
  );
}
  return (
    <div className="overlay">
      <div className="screen-container">
        <div className="screen-content">
          <div className="screen-content-header">
            <h1>Sign Up</h1>
          </div>
          <div className="screen-content-body">
            <div className="form-container">
              <form>
                <InputWithLabel
                  label="First Name"
                  value={state.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                />
                <InputWithLabel
                  label="Last Name"
                  value={state.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                />
                <InputWithLabel
                  label="Phone"
                  value={state.phoneNumber}
                  onChange={(e) => handleChange("phoneNumber", e.target.value)}
                />
                <InputWithLabel
                  label="Email"
                  value={state.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                <InputWithLabel
                  label="Password"
                  value={state.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                />
                <InputWithLabel
                  label="Confirm Password"
                  value={state.confirmPassword}
                  onChange={(e) =>
                    handleChange("confirmPassword", e.target.value)
                  }
                />
                <div className="submitbuttoncontainer-login">
                  <Button
                    variant="primary"
                    type="button"
                    onClick={signUp}
                    style={{ width: "50%" }}
                  >
                    Sign In
                  </Button>
                </div>
              </form>
            </div>
            <div className="signup-container">
              <p>
                Already have an account?{" "}
                <span className="signup-link">
                  <Link to={SIGN_IN}>Sign In</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
