import React from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { InputWithLabel } from "../../../components";
import "./style.css";

const SignIn = () => {
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
                <InputWithLabel label="Username" />
                <InputWithLabel label="Password" />
                <div className="submitbuttoncontainer-login">
                  <Button
                    variant="primary"
                    type="submit"
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
                <Link to="/register">Sign Up</Link>
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
