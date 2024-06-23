import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import DbService from '../shared/service/DataBaseService';
import { useLogin } from './LoginContext';

const EditComponent = () => {
    const {id}=useParams()
    console.log(id)
    const navigate = useNavigate()
    const [room,setRoom]=useState({
        city:"",
        image:"",
        info:"",
        price:0
    })
    const {login,showUserDashboard,setShowuserDashboard,showAdminDashboard,setShowadminDashboard} = useLogin()

    useEffect(()=>{
        DbService.getById("rooms",id).then((res)=>{
            setRoom(res.data)
            console.log(res.data)
        })
    },[])
    const handleChange = (event) => {
        const {name,value} = event.target
        console.log(name,value)
        // Handle form submission logic
        setRoom((prev)=>({
          ...prev,
          [name]:value
        }))
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        DbService.update("rooms",id,room).then((res)=>{
        })
        navigate("/admindashboard/editandupdate")
      
      };
      if(showAdminDashboard)
        {
  return (
    <Container maxWidth="sm">
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        mt: 5,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" component="h2" textAlign="center" mb={3}>
        City Information Form
      </Typography>
      
      <TextField
        label="City"
        variant="outlined"
        name="city"
        required
       
        value={room.city}
        onChange={handleChange}
      />
      
      <TextField
        label="Image"
        variant="outlined"
        name="image"
        value={room.image}
        onChange={handleChange}
        required
      />
      
      <TextField
        label="Info"
        variant="outlined"
        name="info"
        required
        multiline
        rows={4}
        value={room.info}
        onChange={handleChange}
      />
      
      <TextField
        label="Price"
        variant="outlined"
        name="price"
        type="number"
        value={room.price}
        onChange={handleChange}
        required
      />
      
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  </Container>
  )
}
return <></>
}

export default EditComponent