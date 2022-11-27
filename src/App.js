import React from "react";
import './App.scss'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./Components/Dashboard";
import Memberships from "./Components/Memberships";
import Transactions from "./Components/Transactions";
import Users from "./Components/Users";
import UserMemberships from "./Components/UserMemberships";
import ContactFormMeassages from "./Components/ContactFormMeassages";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/memberships" element={<Memberships />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/users" element={<Users />} />
        <Route path="/usermemberships" element={<UserMemberships />} />
        <Route path="/contactformmessages" element={<ContactFormMeassages />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
