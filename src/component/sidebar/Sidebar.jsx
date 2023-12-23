import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarwrapper">
            <div className="sidebarmenu">
                <h3 className="sidebartitle">Dashboard</h3>
                <ul className="sidebarlist">
                    <Link to="/" className='link'>
                    <li className="sidebarlistitem">
                        <i class="fa-solid fa-grip-lines sidebaricon"></i>
                        Home
                    </li>
                    </Link>
                    <li className="sidebarlistitem">
                        <i class="fa-solid fa-timeline sidebaricon"></i>
                        Analytics
                    </li>
                    <li className="sidebarlistitem">
                        <i class="fa-solid fa-arrow-trend-up sidebaricon"></i>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarmenu">
                <h3 className="sidebartitle">Quick Menu</h3>
                <ul className="sidebarlist">
                    <Link to="/users" className='link'>
                    <li className="sidebarlistitem">
                        <i class="fa-regular fa-user sidebaricon"></i>
                        Users
                    </li>
                    </Link>
                    <Link to="/products" className='link'>
                    <li className="sidebarlistitem">
                        <i class="fa-solid fa-shop sidebaricon"></i>
                        Products
                    </li>
                    </Link>
                    <li className="sidebarlistitem">
                        <i class="fa-solid fa-dollar-sign sidebaricon"></i>
                        Transactions
                    </li>
                    <li className="sidebarlistitem">
                        <i class="fa-solid fa-chart-column sidebaricon"></i>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarmenu">
                <h3 className="sidebartitle">Notifications</h3>
                <ul className="sidebarlist">
                    <li className="sidebarlistitem">
                        <i class="fa-solid fa-envelope  sidebaricon"></i>
                        Mail
                    </li>
                    <li className="sidebarlistitem">
                        <i class="fa-regular fa-comment sidebaricon"></i>
                        Feedback
                    </li>
                    <li className="sidebarlistitem">
                        <i class="fa-regular fa-message sidebaricon"></i>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarmenu">
                <h3 className="sidebartitle">Staff</h3>
                <ul className="sidebarlist">
                    <li className="sidebarlistitem">
                        <i class="fa-solid fa-bag-shopping sidebaricon"></i>
                        Manage
                    </li>
                    <li className="sidebarlistitem">
                        <i class="fa-solid fa-timeline sidebaricon"></i>
                        Analytics
                    </li>
                    <li className="sidebarlistitem">
                    <i class="fa-solid fa-circle-exclamation sidebaricon"></i>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
