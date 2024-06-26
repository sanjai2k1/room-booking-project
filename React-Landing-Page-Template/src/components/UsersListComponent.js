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
import { Paper } from '@mui/material';


  
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
      <Paper elevation={3} style={{ maxWidth: '100%', overflowX: 'auto', marginBottom: '20px' }}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: 'black' }}>
              <TableCell style={{ color: 'white' }}>Name</TableCell>
              <TableCell style={{ color: 'white' }}>Email</TableCell>
              <TableCell style={{ color: 'white' }}>Contact</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row, index) => (
              <TableRow key={index} style={{ backgroundColor: index % 2 === 0 ? '#f0f0f0' : 'white' }}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.contact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
     
    </React.Fragment>



    </div>
  )
}

export default UsersListComponent