import React from 'react'
import './topbar.css'

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarwrapper'>
        <div className='left'>
          <span className='logo'>Admin</span>
        </div>
        <div className='right'>
          <div className="topbariconcontainer">
            <i class="fa-regular fa-bell"></i>
            <span className="topiconbadge">2</span>
          </div>
          <div className="topbariconcontainer">
            <i class="fa-solid fa-globe"></i>
            <span className="topiconbadge">2</span>
          </div>
          <div className="topbariconcontainer">
            <i class="fa-solid fa-gear"></i>
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topavatar" />
        </div>
      </div>
    </div>
  )
}
