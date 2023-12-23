import React from 'react'
import './productlist.css'
import { DataGrid} from '@mui/x-data-grid';
import { productrows } from '../../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Productlist() {
    const[data,setdata]=useState(productrows)
    const handledelete=(id)=>{
        setdata(data.filter((item)=>item.id!==id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 200,renderCell:(params)=>{
          return(
              <div className='productlistproduct'>
                  <img className="productlistimage"src={params.row.img} alt="" />
                  {params.row.name}
              </div>
          )
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'price',
          headerName: 'Price',
          width:160,
        },
        {
          field:"action",headerName:"Action",width:150,renderCell:(params)=>{
              return(
                  <>
                  <Link to={"/product/"+params.row.id}>
                      <button className="productlistedit">Edit</button>
                  </Link>
                      <i class="fa-solid fa-trash productlistdelete" onClick={()=>handledelete(params.row.id)}></i>
                  </>
              )
          }
        }
      ];
    
  return (
    <div className='productlist'>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
