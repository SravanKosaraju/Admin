import React, { useState } from 'react'
import './userlist.css'
import { DataGrid} from '@mui/x-data-grid';
import { userrows } from '../../data';
import { Link } from 'react-router-dom';

export default function Userlist() {
    const[data,setdata]=useState(userrows)
    const handledelete=(id)=>{
        setdata(data.filter((item)=>item.id!==id))
    }
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 200,renderCell:(params)=>{
          return(
              <div className='userlistuser'>
                  <img className="userlistimage"src={params.row.avatar} alt="" />
                  {params.row.userName}
              </div>
          )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transactions',
          width:160,
        },
        {
          field:"action",headerName:"Action",width:150,renderCell:(params)=>{
              return(
                  <>
                  <Link to={"/user/"+params.row.id}>
                      <button className="userlistedit">Edit</button>
                  </Link>
                      <i class="fa-solid fa-trash userlistdelete" onClick={()=>handledelete(params.row.id)}></i>
                  </>
              )
          }
        }
      ];
    
  return (
    <div className='userlist'>
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
