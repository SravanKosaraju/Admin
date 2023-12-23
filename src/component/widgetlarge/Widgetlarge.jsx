import React from 'react'
import './widgetlarge.css'

export default function Widgetlarge() {
    const Button=({type})=>{
        return <button className={'widgetlgbutton '+type}>{type}</button>
    }
  return (
    <div className='widgetlg'>
      <h3 className="widgetlgtitle">Latest Transactions</h3>
      <table className='widgetlgtable'>
        <tr className="widgetlgtr">
            <th className="widgetlgth">Customer</th>
            <th className="widgetlgth">Date</th>
            <th className="widgetlgth">Amount</th>
            <th className="widgetlgth">Status</th>
        </tr>
        <tr className="widgetlgtr">
            <td className="widgetlguser">
                <img src="https://images.pexels.com/photos/18926843/pexels-photo-18926843/free-photo-of-rough-volcanic-rock-formation.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="widgetlgimg" />
                <span className="widgetlgname">Eswar K</span>
            </td>
            <td className="widgetlgdate">2 June 2021</td>
            <td className="widgetlgamount">$122.00</td>
            <td className="widgetlgstatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetlgtr">
            <td className="widgetlguser">
                <img src="https://images.pexels.com/photos/18926843/pexels-photo-18926843/free-photo-of-rough-volcanic-rock-formation.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="widgetlgimg" />
                <span className="widgetlgname">Eswar K</span>
            </td>
            <td className="widgetlgdate">2 June 2021</td>
            <td className="widgetlgamount">$122.00</td>
            <td className="widgetlgstatus"><Button type="Declined"/></td>
        </tr>
        <tr className="widgetlgtr">
            <td className="widgetlguser">
                <img src="https://images.pexels.com/photos/18926843/pexels-photo-18926843/free-photo-of-rough-volcanic-rock-formation.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="widgetlgimg" />
                <span className="widgetlgname">Eswar K</span>
            </td>
            <td className="widgetlgdate">2 June 2021</td>
            <td className="widgetlgamount">$122.00</td>
            <td className="widgetlgstatus"><Button type="Pending"/></td>
        </tr>
        <tr className="widgetlgtr">
            <td className="widgetlguser">
                <img src="https://images.pexels.com/photos/18926843/pexels-photo-18926843/free-photo-of-rough-volcanic-rock-formation.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="widgetlgimg" />
                <span className="widgetlgname">Eswar K</span>
            </td>
            <td className="widgetlgdate">2 June 2021</td>
            <td className="widgetlgamount">$122.00</td>
            <td className="widgetlgstatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetlgtr">
            <td className="widgetlguser">
                <img src="https://images.pexels.com/photos/18926843/pexels-photo-18926843/free-photo-of-rough-volcanic-rock-formation.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="widgetlgimg" />
                <span className="widgetlgname">Eswar K</span>
            </td>
            <td className="widgetlgdate">2 June 2021</td>
            <td className="widgetlgamount">$122.00</td>
            <td className="widgetlgstatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetlgtr">
            <td className="widgetlguser">
                <img src="https://images.pexels.com/photos/18926843/pexels-photo-18926843/free-photo-of-rough-volcanic-rock-formation.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="widgetlgimg" />
                <span className="widgetlgname">Eswar K</span>
            </td>
            <td className="widgetlgdate">2 June 2021</td>
            <td className="widgetlgamount">$122.00</td>
            <td className="widgetlgstatus"><Button type="Approved"/></td>
        </tr>
      </table>
    </div>
  )
}