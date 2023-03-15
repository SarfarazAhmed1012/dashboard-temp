import React from "react";
import openAccountImg from "../../assets/imgs/open-account.svg";
import "./OpenAccount.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const OpenAccount = () => {
  return (
    <div className="openAccount">
      <div className="openAccount_container">
        <div className="openAccount_container_img">
          <img src={openAccountImg} alt="open-account-img" />
        </div>
        <div className="openAccount_container_heading">
          <h1>Open a bank account</h1>
          <p>
            Apply today and start using our banking app after documents
            confirmation
          </p>
        </div>
        <div className="openAccount_container_button">
          <AddCircleIcon className="openAccount_container_button_icon" />
          <h6>Open an account or deposit</h6>
        </div>
      </div>
    </div>
  );
};

export default OpenAccount;
