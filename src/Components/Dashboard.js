import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
import './Users.scss'

function Dashboard() {
  return (
    <div className='list'>
    <SideBar />
    <div className='container'>
    <Navbar />
    <div className='listContainer'>
      <div className='listTitle'>Dashboard</div>
    </div>
    </div>
    </div>
  )
}

export default Dashboard
