import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { InputWithLabel } from "../../../components";
import { RESET_PASSWORD, SIGN_IN } from "../../../constants/routes";
import { ForgetPasswordApiCall } from "../../../helpers";

const ForgetPassword = () => {
  const [state, setState] = React.useState({
    email: "",
  });

  const handleChange = (key,value) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ForgetPasswordApiCall(state).then((data) => {
      console.log(data);
    });
  
    console.log(state);
  };

  return (
    <div className="overlay">
      <div className="screen-container">
        <div className="screen-content">
          <div className="screen-content-header">
            <h1>Forget Password</h1>
          </div>
          <div className="screen-content-body">
            <div className="form-container">
              <form>
                <InputWithLabel label="Username"
                value={state.email}
                name="email"
                onChange={event=>handleChange('email',event.target.value)}
                 />
                <div className="submitbuttoncontainer-login">
                  <Button
                    variant="primary"
                    type="button"
                    onClick={handleSubmit}
                    style={{ width: "50%" }}
                  >
                  Send Reset Link
                  </Button>
                </div>
              </form>
            </div>
            <div className="signup-container">
              <p>
                Back to {" "}
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

export default ForgetPassword;
