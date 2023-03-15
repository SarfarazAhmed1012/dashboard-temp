import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./PhoneNumber.css";
const PhoneNumber = () => {
  const [value, setValue] = useState();
  return (
    <PhoneInput
      containerClass="my-container-class"
      inputClass="my-input-class"
      buttonClass="my-button-class"
      dropdownClass="my-dropdown-class"
      country={"pak"} // Set the default country
      value={value}
      onChange={setValue}
    />
  );
};

export default PhoneNumber;
