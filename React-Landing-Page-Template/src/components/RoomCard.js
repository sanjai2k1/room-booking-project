import React from 'react';
import './Roomcard.css'
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';


 


const RoomCard = ({ room, onBook, isBook }) => (
 
    <Card sx={{ maxWidth: 345 }}>
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
          <Button size="small" color="primary" onClick={() => onBook(room)}>
          Book Room
          </Button>
        </CardActions>
      </Card>
  
);

export default RoomCard;
