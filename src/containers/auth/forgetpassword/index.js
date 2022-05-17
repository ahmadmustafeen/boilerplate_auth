import React from "react";
import { Button } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import { InputWithLabel } from "../../../components";
import { INVALID_EMAIL } from "../../../constants/messages";
import { OTP_SCREEN, SIGN_IN } from "../../../constants/routes";
import { ForgetPasswordApiCall, ValidateEmail } from "../../../helpers";

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

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!ValidateEmail(state.email,INVALID_EMAIL)) return false
    ForgetPasswordApiCall(state).then((data) => {
      if(typeof data !== "object"){
        navigate(OTP_SCREEN,{state:{
          email:state.email,
        }})
      }
      console.log(data,"this is the response");
    });  
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
