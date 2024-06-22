import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';


const RoomAddComponent = () => {
    const [roomName, setRoomName] = useState('');
  const [roomDescription, setRoomDescription] = useState('');
  const [roomPrice, setRoomPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log({ roomName, roomDescription, roomPrice });
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: '0 auto',
        p: 2,
        boxShadow: 1,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" align="center" mb={2}>
        Add New Room
      </Typography>
      <TextField
        label="Room Name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        required
        margin="normal"
      />
      <TextField
        label="Room Description"
        value={roomDescription}
        onChange={(e) => setRoomDescription(e.target.value)}
        required
        multiline
        rows={4}
        margin="normal"
      />
      <TextField
        label="Room Price"
        value={roomPrice}
        onChange={(e) => setRoomPrice(e.target.value)}
        required
        type="number"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  )
}

export default RoomAddComponent