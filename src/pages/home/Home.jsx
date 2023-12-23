import React from 'react'
import './home.css'
import Featuredinfo from '../../component/featuredinfo/Featuredinfo'  
import Widgetsmall from '../../component/widgetsmall/Widgetsmall'  
import Widgetlarge from '../../component/widgetlarge/Widgetlarge'  
import Chart from '../../component/chart/Chart'
import {Userdata} from '../../data'

export default function Home() {
  return (
    <div className='home'>
      <Featuredinfo/>
      <Chart data={Userdata} title="User Analytics" grid dataKey="ActiveUser"/>
      <div className="homewidgets">
        <Widgetsmall/>
        <Widgetlarge/>
      </div>
    </div>
  )
}
