import React from "react";
import "./Registeration.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Pg2 = ({ formData, handleInputChange }) => {
  const { dateOfBirth, gender, language, password, confirmPassword } = formData;
  //   const [confirmPassword, setConfirmPassword] = useState("");
  const passwordsMatch = password === confirmPassword;
  const validatePassword = (password) => {
    const pattern = /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return pattern.test(password);
  };

  return (
    <form action="">
      {password && !validatePassword(password) && (
        <p className="error_message" style={{ color: "red" }}>
          Password must be minimum 8 letters with capital letters and numbers!
        </p>
      )}
      <div className="signup_input-container">
        <div
          className="signup_input"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DatePicker
            selected={dateOfBirth}
            // onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
            onChange={(date) => handleInputChange("dateOfBirth", date)}
            placeholderText="Date of Birth"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={100}
            dateFormat="dd/MM/yyyy"
            autoComplete="nope"
          />
        </div>
        <div className="signup_input">
          <select
            name="gender"
            value={gender}
            onChange={(e) => handleInputChange("gender", e.target.value)}
            style={{
              color: "#a59b9b",
            }}
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="signup_input">
          <select
            name="language"
            value={language}
            onChange={(e) => handleInputChange("language", e.target.value)}
            style={{
              color: "#a59b9b",
            }}
          >
            <option value="" disabled>
              Select Language
            </option>
            <option value="english">English</option>
            <option value="francais">Francais</option>
            <option value="Portuguese">Portuguese</option>
            <option value="espanol">Espanol</option>
            <option value="italiano">Italiano</option>
          </select>
        </div>
        <div className="signup_input">
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
        </div>
        <div className="signup_input">
          <input
            style={{
              borderColor:
                !passwordsMatch && confirmPassword.length > 0 ? "red" : "",
            }}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              handleInputChange("confirmPassword", e.target.value)
            }
          />
        </div>
      </div>
    </form>
  );
};

export default Pg2;
