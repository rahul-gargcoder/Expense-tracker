import React from 'react'
import dp from '../assets/img1.jpg'

import '../css/sidebar.css'

function Sidebar() {
  return (

    <div className='sidebar-container'>
        <div className='top'>
            <img src={dp} alt="" />
            <h3>Username</h3>
        </div>
        <hr style={{margin:'8px 20px 40px 20px',backgroundColor:'#3f3f3f',height:'0.5px',border:'none'}} />
        <div className='nav-list'>
            <a href="/home">
                <i class="bi bi-grid"></i>
                <h3>Home</h3>
            </a>
            <a href="">
                <i class="bi bi-clock-history"></i>
                <h3>History</h3>
            </a>
            <a href="">
                <i class="bi bi-pie-chart-fill"></i>
                <h3>Statistics</h3>
            </a>
            <a href="">
                <i class="bi bi-gear"></i>
                <h3>Settings</h3>
            </a>
            <a href="/logout">
                <i class="bi bi-box-arrow-right"></i>
                <h3>Logout</h3>
            </a>
        </div>
        
    </div>
  )
}

export default Sidebar