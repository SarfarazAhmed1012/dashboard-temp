import React from "react";
import "./Footer.scss";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import LanguageIcon from "@mui/icons-material/Language";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="left-section_footer">
        <a href="#">Privacy Policy</a>
        <a href="#">Liscense</a>
        <a href="#">API</a>
        <a href="#">Help Center</a>
        <span>@ 2023 All rights reserved</span>
      </div>
      <div className="right-section_footer">
        <a href="#">English</a>
        <LanguageIcon />
        <Brightness3Icon className="icon" />
      </div>
    </div>
  );
};
