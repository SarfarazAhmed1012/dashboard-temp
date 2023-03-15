import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Registeration from "./pages/registeration/Registeration";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <div className="login_page">
                  <Login />
                </div>
              </React.Fragment>
            }
          />
          <Route
            path="registeration"
            element={
              <React.Fragment>
                <div className="login_page">
                  <Registeration />
                </div>
              </React.Fragment>
            }
          />

          <Route path="home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
