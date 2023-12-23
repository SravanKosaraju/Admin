import React from 'react'
import './featuredinfo.css'
export default function Featuredinfo() {
  return (
    <div className='featured'>
      <div className="featureditem">
        <span className="featuredtitle">Revenue</span>
        <div className="featuredmoneycontainer">
            <span className="featuredmoney">$2,415</span>
            <span className="featuredmoneyrate">
                -11.4 <i class="fa-solid fa-arrow-down featuredicon negative"></i>
            </span>
        </div>
        <span className="featuredsub">Compared to last month</span>
      </div>
      <div className="featureditem">
        <span className="featuredtitle">Sales</span>
        <div className="featuredmoneycontainer">
            <span className="featuredmoney">$4,415</span>
            <span className="featuredmoneyrate">
                -1.4 <i class="fa-solid fa-arrow-down featuredicon negative"></i>
            </span>
        </div>
        <span className="featuredsub">Compared to last month</span>
      </div>
      <div className="featureditem">
        <span className="featuredtitle">Cost</span>
        <div className="featuredmoneycontainer">
            <span className="featuredmoney">$1,415</span>
            <span className="featuredmoneyrate">
                +2.4 <i class="fa-solid fa-arrow-up featuredicon"></i>
            </span>
        </div>
        <span className="featuredsub">Compared to last month</span>
      </div>
    </div>
  )
}
