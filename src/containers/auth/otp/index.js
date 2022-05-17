import React from "react";
import { Button } from "react-bootstrap";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { RESET_PASSWORD } from "../../../constants/routes";

const OtpScreen = () => {
  const [otp, setOtp] = React.useState("");

  const handleChange = (otp) => setOtp(otp);
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
                    type="submit"
                    style={{ width: "50%" }}
                  >
                     <Link to={RESET_PASSWORD} style={{color:'white'}}>Proceed</Link>
                 </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpScreen;
