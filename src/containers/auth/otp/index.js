import React from "react";
import { Button } from "react-bootstrap";
import OtpInput from "react-otp-input";
import { Link,useLocation,useNavigate } from "react-router-dom";
import { RESET_PASSWORD, SIGN_IN } from "../../../constants/routes";
import { VerifyOtpApiCall } from "../../../helpers";

const OtpScreen = props => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location?.state?.email || "";
  const [otp, setOtp] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  const handleChange = (otp) => setOtp(otp);


  const handleSubmit = (e) => {
    e.preventDefault();

    setLoader(true);
    VerifyOtpApiCall({email,otp}).then((data) => {
      if(Object.keys(data).length){
        navigate(RESET_PASSWORD,{state:{email}})
      }
    }
    ).catch(err=>{
      console.log(err);
    }
    ).finally(()=>{

      setLoader(false);
    }
    )
  }
  return (
    <div className="overlay">
      <div className="screen-container">
        <div className="screen-content">
          <div className="screen-content-header">
            <h1>Verify OTP</h1>
          </div>
          <div className="screen-content-body">
            <div className="form-container">
              <div className="otp-heading">
                <h6>Enter the OTP sent to your registered email address</h6>
              </div>
              <form>
                <OtpInput
                  value={otp}
                  onChange={handleChange}
                  numInputs={4}
                  
                  inputStyle={{ width: "50px", height: "50px" }}
                  separator={<span>-</span>}
                />

                <div className="submitbuttoncontainer-login">
                  <Button
                    variant="primary"
                    type="button"
                    disabled={loader}

                    onClick={handleSubmit}
                    style={{ width: "50%" }}
                  >
                    Proceed
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

export default OtpScreen;
