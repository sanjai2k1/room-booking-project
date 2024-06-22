import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';



  
const UsersListComponent = () => {
const [users,setUsers]= useState([])
useEffect(()=>{
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
            <TableCell>address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row,ind) => (
            <TableRow key={ind}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.contact}</TableCell>
              <TableCell>{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </React.Fragment>



    </div>
  )
}

export default UsersListComponent