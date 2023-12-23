import React from 'react'
import './user.css'
import { Link } from 'react-router-dom'

export default function User() {
    return (
        <div className='user'>
            <div className="usertitlecontainer">
                <h1 className='usertitle'>Edit User</h1>
                <Link to="/newuser">
                    <button className="useraddbutton">Create</button>
                </Link>
            </div>
            <div className="usercontainer">
                <div className="usershow">
                    <div className="usershowtop">
                        <img src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="usershowimg" />
                        <div className="usershowtoptitle">
                            <span className="usershowusername">Jhon Snow</span>
                            <span className="usershowusertitle">Data Analyst</span>
                        </div>
                    </div>
                    <div className="usershowbottom">
                        <span className="usershowtitle">Account Details</span>
                        <div className="usershowinfo">
                            <i class="fa-regular fa-user usershowicon"></i>
                            <span className="usershowinfotitle">jhonsnow69</span>
                        </div>
                        <div className="usershowinfo">
                        <i class="fa-regular fa-calendar-days usershowicon"></i>
                            <span className="usershowinfotitle">10.12.1999</span>
                        </div>
                        <span className="usershowtitle">Contact Details</span>
                        <div className="usershowinfo">
                            <i class="fa-solid fa-phone usershowicon"></i>
                            <span className="usershowinfotitle">+91 397329639693</span>
                        </div>
                        <div className="usershowinfo">
                            <i class="fa-solid fa-envelope usershowicon"></i>
                            <span className="usershowinfotitle">jhonsnow69@gmail.com</span>
                        </div>
                        <div className="usershowinfo">
                            <i class="fa-solid fa-location-crosshairs usershowicon"></i>
                            <span className="usershowinfotitle">Banglore | India</span>
                        </div>
                    </div>
                </div>
                <div className="userupdate">
                    <span className="userupdatetitle">Edit</span>
                    <form action="" className="userupdateform">
                        <div className="userupdateleft">
                            <div className="userupdateitem">
                                <label>Username</label>
                                <input type="text" placeholder='jhonsnow69' className='userupdateinput'/>
                            </div>
                            <div className="userupdateitem">
                                <label>Fullname</label>
                                <input type="text" placeholder='Jhon Snow' className='userupdateinput'/>
                            </div>
                            <div className="userupdateitem">
                                <label>Email</label>
                                <input type="email" placeholder='jhonsnow69@gamil.com' className='userupdateinput'/>
                            </div>
                            <div className="userupdateitem">
                                <label>Phone</label>
                                <input type="text" placeholder='397329639693' className='userupdateinput'/>
                            </div>
                            <div className="userupdateitem">
                                <label>Address</label>
                                <input type="text" placeholder='Banglore | India' className='userupdateinput'/>
                            </div>
                        </div>
                        <div className="userupdateright">
                            <div className="userupdateupload">
                                <img className="userupdateimg" src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                                <label htmlFor="file"><i class="fa-solid fa-upload userupdateicon"></i></label>
                                <input type="file" id='file' style={{display:"none"}} />
                            </div>
                            <button className="userupdatebutton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
