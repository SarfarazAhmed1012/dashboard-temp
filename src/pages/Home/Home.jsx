import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Assets from "../../components/assets/Assets";
import Balance from "../../components/balance/Balance";
import Dashboard from "../../components/dashboard/Dashboard";
import { Footer } from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import OpenAccount from "../../components/openAccount/OpenAccount";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div>
          <Route path="/balance" element={<Balance />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/open-account" element={<OpenAccount />} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
