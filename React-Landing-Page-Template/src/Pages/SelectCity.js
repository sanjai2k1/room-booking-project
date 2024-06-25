import React, { useEffect, useState } from 'react';
import RoomCard from '../components/RoomCard';
// import data from '../data/roomdata.json'; // Import your data
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import DbService from '../shared/service/DataBaseService';
import { useLogin } from '../components/LoginContext';
import { Card, CardContent, CardMedia, Typography, CardActions, Button,Box } from '@mui/material';

const SelectCity = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [roomData,setRoomData] = useState([])
  const [availableRooms, setAvailableRooms] = useState([]);
  const [bookedRooms, setBookedRooms] = useState([]);
  const {login,setLogin,showUserDashboard,setShowuserDashboard,showAdminDashboard,setShowadminDashboard} = useLogin()
  // Load data from localStorage on component mount
  const [cities,setCities] = useState([])
  const navigate = useNavigate()
      const [user,setUser]=useState()
  const {id} = useParams()


  useEffect(()=>{
    console.log(bookedRooms)
    if(sessionStorage.getItem("user")){
      setLogin(true)
      setShowuserDashboard(true)
      
    
    DbService.getById("users",id).then((res)=>{
      
      setUser(res.data)
   
      
    })
    DbService.get("rooms").then((res)=>{
      setRoomData((prev)=>[...res.data])
      setAvailableRooms((prev)=>[...res.data])

      
      
    })
    DbService.get("cities").then((res)=>{
      setCities((prev)=>[...res.data])

      
      
    })
  }
  else{
    navigate("/login")
  }


  },[])

 
  // const addItem = (room) => {
  //   bookedRooms.push(room)
  //   sessionStorage.setItem(id,JSON.stringify(bookedRooms))
    
   
  //   // setInputValue('');
  // };
  // Function to handle booking a room
  const handleBookRoomClick = (room) => {
    // addItem(room)
    const alreadyExists = user.bookedrooms.find((rooms)=>rooms.id===room.id)
    if(!alreadyExists)
      {
        const modifiy = {
          ...user,
          bookedrooms:[...user.bookedrooms,room]
        }
       
        // setUser({...user,bookedrooms:[...bookedRooms]})
        // console.log(user)
        DbService.update("users",id,modifiy).then((res)=>{
          setUser(res.data)
          
        })
        window.alert('Room Booked Successfully');
      }
      else{
        window.alert('Already Booked ');
      }
   
    // DbService.post("bookedRooms",room).then((res)=>{})
    // Pass booked room to parent component
    
  };

  // Function to handle city selection
  const handleCitySelect = (e) => {
    const city = e.target.value;
    if(city!=="")
      {
    setSelectedCity(city);
    const rooms = roomData.filter(room => room.city === city && !room.booked);
    setAvailableRooms(rooms);
      }
      else{
        setSelectedCity(city);
        setAvailableRooms(roomData)
      }
  };
if(login && showUserDashboard)
  {
  return (
    <div>
      <h2>Select Rooms</h2>
      <div className="form-group">
        <label htmlFor="citySelect">Select City:</label>
        <select id="citySelect" className="form-control" onChange={handleCitySelect} value={selectedCity}>
          <option value="">Select a city...</option>
          {cities.length>0 ?cities.map(city => (
            <option key={city.id} value={city.city}>{city.city}</option>
          )) :<>loading...</>}
        </select>
      </div>
      <Box display="flex" flexWrap="wrap" gap={2}>
        {roomData.length>0 ? availableRooms.map(room => (
          
          <Card key={room.id} sx={{ maxWidth: 345 }}>
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
            <Button size="small" color="primary" onClick={()=>handleBookRoomClick(room)} >
              Book Room
            </Button>
   
          </CardActions>
        </Card>
          
        )):<h1>Loading..</h1>}
        </Box>
     
    </div>
  );
  }
  return <></>

};

export default SelectCity;
