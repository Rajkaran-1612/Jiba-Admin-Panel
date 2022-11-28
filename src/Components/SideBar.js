import "./Sidebar.scss";
import React from 'react'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import DatasetIcon from '@mui/icons-material/Dataset';
import { Link } from "react-router-dom";

function SideBar() {
    return (
    <div className="sidebar">
      <div className="top">
      <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Jiba Admin</span>
      </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/memberships" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Memberships</span>
            </li>
          </Link>
          <Link to="/transactions" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon" />
            <span>Transactions</span>
          </li>
          </Link>
          <Link to="/usermemberships" style={{ textDecoration: "none" }}>
          <li>
            <CardMembershipIcon className="icon" />
            <span>User Memberships</span>
          </li>
          </Link>
          <Link to="/contactformmessages" style={{ textDecoration: "none" }}>
          <li>
            <DatasetIcon className="icon" />
            <span>Contact Form Data</span>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
