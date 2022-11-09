import React from "react";
import '../src/App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./Components/Dashboard";
import Memberships from "./Components/Memberships";
import SideBar from "./Components/SideBar";
import Transactions from "./Components/Transactions";
import Users from "./Components/Users";

function App() {
  return (
    <>
    <Router>
      <SideBar>
              <Routes>
                <Route exact path='/' element= { <Dashboard /> }/>
                <Route exact path='/dashboard' element= { <Dashboard /> }/>
                <Route exact path='/memberships' element= { <Memberships /> }/>
                <Route exact path='/transactions' element= { <Transactions /> }/>
                <Route exact path='/users' element= { <Users /> }/>
              </Routes>
      </SideBar>
          </Router>
    </>
  );
}

export default App;
