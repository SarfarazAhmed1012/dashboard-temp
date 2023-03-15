import React from "react";
import "./Registeration.css";
import PhoneInput from "react-phone-input-2";

const Pg1 = ({ formData, handleInputChange }) => {
  const { firstName, lastName, nickName, email, phoneNumber } = formData;

  return (
    <form action="">
      <div className="signup_input-container">
        <div className="signup_input">
          <input
            type="text"
            placeholder="First name"
            className="registeration_input"
            value={firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
          />
        </div>
        <div className="signup_input">
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
          />
        </div>
        <div className="signup_input">
          <input
            type="text"
            value={nickName}
            placeholder="Nick name"
            onChange={(e) => handleInputChange("nickName", e.target.value)}
          />
        </div>
        <div className="signup_input">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </div>
        <div className="signup_input">
          <PhoneInput
            country={"pk"}
            value={phoneNumber}
            onChange={(value) => handleInputChange("phoneNumber", value)}
            className="phnInput"
          />
        </div>
      </div>
    </form>
  );
};

export default Pg1;
