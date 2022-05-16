import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { InputWithLabel } from "../../../components";
import { SIGN_IN } from "../../../constants/routes";
import { ResetPasswordApiCall } from "../../../helpers";

const ResetPassword = () => {
  const [state, setState] = React.useState({
    email: "engr.ahmadmustafeen@gmail.com",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (key,value) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    if(!state.password || !state.confirmPassword){
      return alert("Enter all the fields");
    }
    if(state.password !== state.confirmPassword){
      alert("Password and Confirm Password should be same");
      return;
    }
    e.preventDefault();
    ResetPasswordApiCall(state).then((data) => {
      console.log(data);
    }).catch
    (err=>{
      alert(err.message);
    }
    );
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
                <InputWithLabel label="Password" 
                value={state.password}
                name="password"
                onChange={event=>handleChange('password',event.target.value)}
                />
                <InputWithLabel label="Confirm Password" 
                value={state.confirmPassword}
                name="confirmPassword"
                onChange={event=>handleChange('confirmPassword',event.target.value)}

                />
                <div className="submitbuttoncontainer-login">
                  <Button
                    variant="primary"
                    type="button"
                    onClick={handleSubmit}
                    style={{ width: "50%" }}
                  >
                    Confirm Password
                  </Button>
                </div>
              </form>
            </div>
            <div className="signup-container">
              <p>
                Back to{" "}
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

export default ResetPassword;
