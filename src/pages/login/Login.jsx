import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/imgs/wa-one-logo.png";
import loginImage from "../../assets/imgs/login.png";
import { GoMention, GoLock } from "react-icons/go";
import { Link } from "react-router-dom";

const Login = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [password, setPassword] = useState("");

  console.log(email, password);

  const handleEmailChange = (event) => {
    const { value } = event.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(value);
    setEmail(value);
    setIsValid(isValidEmail);
    setIsDisabled(!(isValidEmail && password));
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
    setIsDisabled(!(isValid && password));
  };

  return (
    <div className="container">
      <div className="left-section">
        <img src={loginImage} alt="login-img" />
      </div>
      <div className="right-section">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="heading_text">
          <h1 className="heading">Sign in!</h1>
        </div>
        <div className="heading_span">
          <span>Sign in to your Account</span>
        </div>

        <div className="input-container">
          <div class="Icon-inside">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              style={{
                border: !isValid && email.length > 0 && "1px solid red",
              }}
            />
            <i class="fa fa-user fa-lg fa-fw" aria-hidden="true">
              <GoMention />
            </i>
          </div>
          <div class="Icon-inside">
            <input
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            <i class="fa fa-envelope fa-lg fa-fw" aria-hidden="true">
              <GoLock />
            </i>
          </div>
        </div>
        <div className="forget_pass">Forgot password?</div>
        <div className="buttons">
          <Link to="home" style={{ textDecoration: "none" }}>
            <button
              className="button_input sign_in_button"
              disabled={isDisabled}
            >
              SIGN IN
            </button>
          </Link>

          <Link to="/registeration" style={{ textDecoration: "none" }}>
            <button className="button_input">SIGNUP</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
