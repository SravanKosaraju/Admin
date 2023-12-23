import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import Chart from '../../component/chart/Chart'
import { Productdata } from '../../data'

export default function Product() {
  return (
    <div className='product'>
      <div className="producttitlecontainer">
        <h1 className="producttitle">Product</h1>
        <Link to='/newproduct'>
            <button className="productaddbutton">Create</button>
        </Link>
      </div>
      <div className="producttop">
        <div className="producttopleft">
            <Chart data={Productdata} dataKey="Sales" title="Sales Performance" grid/>
        </div>
        <div className="producttopright">
            <div className="productinfotop">
                <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Product" className="productinfoimg" />
                <span className="productname">Apple Airpods</span>
            </div>
            <div className="productinfobottom">
                <div className="productinfoitem">
                    <span className="productinfokey">id:</span>
                    <span className="productinfovalue">123</span>
                </div>
                <div className="productinfoitem">
                    <span className="productinfokey">Sales:</span>
                    <span className="productinfovalue">4123</span>
                </div>
                <div className="productinfoitem">
                    <span className="productinfokey">Active:</span>
                    <span className="productinfovalue">Yes</span>
                </div>
                <div className="productinfoitem">
                    <span className="productinfokey">InStock:</span>
                    <span className="productinfovalue">No</span>
                </div>
            </div>
        </div>
      </div>
      <div className="productbottom">
        <form  className="productform">
            <div className="productformleft">
                <label >Product Name</label>
                <input type="text" placeholder='Apple Airpod' />
                <label >In Stock</label>
                <select name="InStock" id="InStock">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <label >Active</label>
                <select name="Active" id="Active">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div className="productformright">
                <div className="productupload">
                    <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="productuploadimg" />
                    <label for="file"><i class="fa-solid fa-upload"></i></label>
                    <input type="text" id='file' style={{display:"none"}} />
                </div>
                <button className="productbutton">Update</button>
            </div>
        </form>
      </div>
    </div>
  )
}
