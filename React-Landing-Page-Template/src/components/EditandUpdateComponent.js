import React from 'react'
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { Box } from '@mui/material';

const cards = [
    {
      image: 'https://via.placeholder.com/140',
      name: 'Card 1',
      description: 'Description for card 1',
    },
    {
      image: 'https://via.placeholder.com/140',
      name: 'Card 2',
      description: 'Description for card 2',
    },
    {
      image: 'https://via.placeholder.com/140',
      name: 'Card 3',
      description: 'Description for card 3',
    },
  ];
const CardComponent = ({ image, name, description, onEdit, onDelete }) => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
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
  return (
    <div> <Box display="flex" flexWrap="wrap" gap={2}>
    {cards.map((card, index) => (
      <CardComponent
        key={index}
        image={card.image}
        name={card.name}
        description={card.description}
      />
    ))}
  </Box></div>
  )
}

export default EditandUpdateComponent