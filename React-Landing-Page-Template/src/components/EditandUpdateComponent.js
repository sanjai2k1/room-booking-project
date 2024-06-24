import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { Box } from '@mui/material';
import DbService from '../shared/service/DataBaseService';
import { useNavigate } from 'react-router-dom';
import { useLogin } from './LoginContext';


const CardComponent = ({ image, city,info,price,id,setCards}) => {
  const navigate = useNavigate()
  
  const onDelete =(event)=>{
    DbService.delete("rooms",id).then((res)=>{
      window.alert("deleted")
      
      
    })
    DbService.get("rooms").then((res)=>{
    setCards(res.data)
    })
  }

  const onEdit =()=>{
    navigate(`/admindashboard/edit/${id}`)
  }
 


    
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={"img"}
        />
        <CardContent>
         
          <Typography variant="body1" color="text.secondary">
            {info}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={onEdit}>
            Edit
          </Button>
          <Button size="small" color="secondary" onClick={onDelete}>
            Delete
          </Button>
        </CardActions>
      </Card>
    );
  };


const EditandUpdateComponent = () => {
  const navigate = useNavigate()
  const [cards,setCards]=useState()
  const {login,showUserDashboard,setShowuserDashboard,showAdminDashboard,setShowadminDashboard,adminLogin, setAdminlogin} = useLogin()


    useEffect(()=>{
      if(!showAdminDashboard){
        navigate("/login")
      }else{
      DbService.get("rooms").then((res)=>{
        setCards(res.data)
      })
    }
    },[cards])
    // console.log(adminLogin,showAdminDashboard)
  
  return (
    <div> <Box display="flex" flexWrap="wrap" gap={2}>
    {cards ? cards.map((card, index) => (
      <CardComponent
        key={index}
        image={card.image}
        city={card.city}
        info={card.info}
        price={card.price}
        id={card.id}
        setCards={setCards}
      />
    )) : <h1>Loading..</h1>}
  </Box></div>
  )
}

export default EditandUpdateComponent


