import React from "react";
import "./Registeration.css";

const Pg3 = ({ formData, handleInputChange }) => {
  const { otp } = formData;
  return (
    <form action="">
      <div className="signup_input-container">
        <div className="signup_input otp_input">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => handleInputChange("otp", e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

export default Pg3;
