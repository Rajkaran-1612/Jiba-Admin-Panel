import React from "react";
import './App.scss'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./Components/Dashboard";
import Memberships from "./Components/Memberships";
import SideBar from "./Components/SideBar";
import Transactions from "./Components/Transactions";
import Users from "./Components/Users";

function App() {
  return (
    <div className="home">
    <SideBar />
      <div className="homeContainer">
        <p>Container</p>
        </div>
      </div>
  );
}

export default App;
