import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { InputWithLabel } from "../../../components";
import { ENTER_CONFIRM_PASSWORD, ENTER_FIRST_NAME, ENTER_LAST_NAME, ENTER_PASSWORD, ENTER_PHONE, INVALID_CONFIRM_PASSWORD, INVALID_EMAIL_FORMAT } from "../../../constants/messages";
import { DASHBOARD, SIGN_IN } from "../../../constants/routes";
import { SignUpApiCall, ValidateEmail, ValidateIsEmpty, ValidateIsTrue } from "../../../helpers";

const SignUp = () => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const [loader, setLoader] = React.useState(false);
  const handleChange = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  const validation = () => {
    return ValidateIsEmpty(state.firstName, ENTER_FIRST_NAME) &&
      ValidateIsEmpty(state.lastName, ENTER_LAST_NAME) &&
      ValidateIsEmpty(state.phoneNumber, ENTER_PHONE) &&
      ValidateEmail(state.email, INVALID_EMAIL_FORMAT) &&
      ValidateIsEmpty(state.password, ENTER_PASSWORD) &&
      ValidateIsEmpty(state.confirmPassword, INVALID_CONFIRM_PASSWORD) &&
      ValidateIsTrue(state.password === state.confirmPassword, ENTER_CONFIRM_PASSWORD);

  }

  const navigate = useNavigate()
  const signUp = () => {
    if (!validation()) return false
    setLoader(true)
    SignUpApiCall(state).then((data) => {
      if (Object.keys(data).length) navigate(DASHBOARD)
    }
    ).catch((err) => {
      console.log(err);
    }
    ).finally(() => {
      setLoader(false)
    }
    )
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
                  isNumOnly={true}
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
                    disabled={loader}
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
