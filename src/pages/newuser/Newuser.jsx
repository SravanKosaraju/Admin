import React from 'react'
import './newuser.css'

export default function Newuser() {
  return (
    <div className='newuser'>
        <h1 className='newusertitle'>New User</h1>
        <form className="newuserform">
            <div className="newuseritem">
                <label>Username</label>
                <input type="text" placeholder='Jhon89' />
            </div>
            <div className="newuseritem">
                <label>Fullname</label>
                <input type="text" placeholder='Jhon smith' />
            </div>
            <div className="newuseritem">
                <label>Email</label>
                <input type="email" placeholder='Jhon@gmail.com' />
            </div>
            <div className="newuseritem">
                <label>Password</label>
                <input type="password" placeholder='password' />
            </div>
            <div className="newuseritem">
                <label>Phone</label>
                <input type="text" placeholder='+91 1234567899' />
            </div>
            <div className="newuseritem">
                <label>Address</label>
                <input type="text" placeholder='Banglore | India' />
            </div>
            <div className="newuseritem">
                <label>Gender</label>
                <div className="newusergender">
                    <input type="radio" name='gender' id='male' value='male'/>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name='gender' id='female' value='female'/>
                    <label htmlFor="female">Female</label>
                    <input type="radio" name='gender' id='other' value='other'/>
                    <label htmlFor="other">Other</label>
                </div>
            </div>
            <div className="newuseritem">
                <label >Active</label>
                <select className="newuserselect" id="active" name='active'>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <button className="newuserbutton">Create</button>
        </form>
    </div>
  ) 
}
