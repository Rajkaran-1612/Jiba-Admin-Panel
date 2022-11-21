import React from 'react'
import SideBar from './SideBar'
import './Users.scss'

function Dashboard() {
  return (
    <div className='list'>
    <SideBar />
    <div className='listContainer'>
      <div className='listTitle'>Dashboard</div>
    </div>
    </div>
  )
}

export default Dashboard
