import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useNavigate } from 'react-router-dom';
import { useLogin } from './LoginContext';



  
const UsersListComponent = () => {
const [users,setUsers]= useState([])
const {
  login,
  setLogin,
  showUserDashboard,
  setShowuserDashboard,
  showAdminDashboard,
  setShowadminDashboard,adminLogin, setAdminlogin
} = useLogin();
const navigate = useNavigate()
useEffect(()=>{
  if(sessionStorage.getItem("admin")){
    setLogin(true)
    setShowuserDashboard(false)
    setShowadminDashboard(true)
  }
  if(!showAdminDashboard){
    navigate("/login")
  }
axios.get('http://localhost:8888/users').then((res)=>{
    console.log(res.data)
    setUsers(res.data)

})


},[])


    
  return (
    <div>

<React.Fragment>


      <Title>Users List</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>email</TableCell>
            <TableCell>contact</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row,ind) => (
            <TableRow key={ind}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.contact}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </React.Fragment>



    </div>
  )
}

export default UsersListComponent