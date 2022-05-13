import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { InputWithLabel } from "../../../components";
import { SIGN_IN } from "../../../constants/routes";

const ForgetPassword = () => {
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
                <InputWithLabel label="Username" />
                <div className="submitbuttoncontainer-login">
                  <Button
                    variant="primary"
                    type="submit"
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
