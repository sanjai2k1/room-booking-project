import React, { useEffect, useState } from 'react';
import DbService from '../shared/service/DataBaseService';
import { useParams } from 'react-router-dom';
import { useLogin } from '../components/LoginContext';
import { Card, CardContent, CardMedia, Typography, CardActions, Button,Box } from '@mui/material';

const SelectedRooms = () => {
    const [bookedRooms,setBookedRooms]=useState([])
    const {id} = useParams()
    const {login,showUserDashboard,setShowuserDashboard} = useLogin()
    const [user,setUser]=useState()

    useEffect( ()=>{
      DbService.getById("users",id).then((res)=>{
        setBookedRooms(res.data.bookedrooms)
        setUser(res.data)
      })
     
    },[])

    const cancel =(ide)=>{
      
      const filtered = bookedRooms.filter((br)=>br.id!==ide)
      setBookedRooms(filtered)

      const modifiy = {
        ...user,
        bookedrooms:[...filtered]
      }
      DbService.update("users",id,modifiy).then((res)=>{
        console.log(res)
      })
      window.alert('Room Cancelled ');

    }
    
    if(login && showUserDashboard)
      {

    return (
  <div>
    <h2>Selected Rooms</h2>
    <Box display="flex" flexWrap="wrap" gap={2}>
        {bookedRooms ? bookedRooms.map(room => (
          
          <Card sx={{ maxWidth: 345 }} key={room.id}>
          <CardMedia
            component="img"
            height="140"
            image={room.image}
            alt={"img"}
          />
          <CardContent>
           
            <Typography variant="body1" color="text.secondary">
              {room.info}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {room.city}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {room.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={()=>cancel(room.id)} >
              Cancel
            </Button>
   
          </CardActions>
        </Card>
          
        )) : (
          <p>No rooms booked yet.</p>
        ) }
        </Box>
     
     
    </div>

    )
  }
  else{
    <></>
  }
}

export default SelectedRooms;
