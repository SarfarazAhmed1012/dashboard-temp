import React, { useState } from "react";
import "./Registeration.css";
import logo from "../../assets/imgs/wa-one-logo.png";
import signupImage from "../../assets/imgs/signup.png";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import Pg1 from "./Pg1.form";
import Pg2 from "./Pg2.form";
import Pg3 from "./Pg3.form";

const Registeration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nickName: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    language: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    otp: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  //   console.log(formData);

  const [page, setPage] = useState(1);
  //   const [page1Button, setPage1Button] = useState(true);
  //   const [page2Button, setPage2Button] = useState(true);
  //   const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const pattern = /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return pattern.test(password);
  };

  const isPage1Complete = () => {
    const { firstName, lastName, nickName, email, phoneNumber } = formData;
    return (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      nickName.trim() !== "" &&
      validateEmail(email) &&
      phoneNumber.trim() !== ""
    );
  };

  const isPage2Complete = () => {
    const { dateOfBirth, gender, language, password, confirmPassword } =
      formData;
    return (
      dateOfBirth &&
      gender &&
      language &&
      validatePassword(password) &&
      password === confirmPassword
    );
  };

  const handleOtp = () => {
    const { otp } = formData;
    return otp.length >= 4;
  };

  return (
    <div className="signup_container">
      <div className="signup_left-section">
        <div className="signup_logo">
          <img src={logo} alt="logo-img" />
        </div>
        <div className="signup_heading_text">
          <h1 className="signup_heading">Sign up</h1>
        </div>
        <div className="signup_heading_span">
          {page === 3 ? (
            <span className="otp_validate">
              Validate OTP (One time passcode)
            </span>
          ) : (
            <span>Create Account</span>
          )}
          {/* {isValidEmail ? null : (
            <p className="error_message">Invalid email address</p>
          )} */}
        </div>

        {page === 1 ? (
          <Pg1 formData={formData} handleInputChange={handleInputChange} />
        ) : page === 2 ? (
          <Pg2 formData={formData} handleInputChange={handleInputChange} />
        ) : (
          <Pg3 formData={formData} handleInputChange={handleInputChange} />
        )}

        <div className="signup_buttons">
          {page === 3 ? (
            <button
              className="signup_button_input otp"
              disabled={page === 3 && !handleOtp()}
              style={{ borderColor: "gray" }}
            >
              VERIFY
            </button>
          ) : (
            <>
              <button
                className="signup_button_input"
                disabled={page !== 2}
                onClick={() => {
                  const nextPage = page - 1;
                  setPage(nextPage);
                }}
              >
                PREVIOUS
              </button>
              <button
                className="signup_button_input"
                style={{
                  color: isPage1Complete && "#0a66c2",
                  backgroundColor: isPage1Complete ? "white" : "",
                }}
                disabled={page === 1 ? !isPage1Complete() : !isPage2Complete()}
                onClick={(e) => {
                  //   e.preventDefault();
                  const nextPage = page + 1;
                  if (page === 1 ? isPage1Complete() : isPage2Complete()) {
                    setPage(nextPage);
                  }
                }}
              >
                NEXT
              </button>
            </>
          )}
        </div>

        <div className="already">
          Already registered?{" "}
          <Link to="/" style={{ textDecoration: "none" }}>
            <span>Sign in</span>
          </Link>
        </div>
      </div>
      <div className="signup_right-section">
        <img src={signupImage} alt="signup-img" />
      </div>
    </div>
  );
};

export default Registeration;
