import React from "react";
import "./Sidebar.scss";
import logo from "../../assets/imgs/wa-one-logo.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";
import PaymentIcon from "@mui/icons-material/Payment";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import SettingsIcon from "@mui/icons-material/Settings";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={logo} alt="logo-img" />
      </div>
      <div className="center">
        <ul>
          <p className="title">Navigation</p>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <LayersIcon />
            <span>Accounts</span>
          </li>
          <li>
            <PaymentIcon />
            <span>Cards</span>
          </li>
          <li>
            <SyncAltIcon />
            <span>Transactions</span>
          </li>
          <li>
            <DoneAllIcon />
            <span>Payment</span>
          </li>
          <li>
            <RequestQuoteIcon />
            <span>Invoicing</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="settings">
          <SettingsIcon />
          Profile Settings
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
