import React, { useEffect, useState } from 'react';
import RoomCard from '../components/RoomCard';
import data from '../data/roomdata.json'; // Import your data
import { useLocation, useParams } from 'react-router-dom';
import DbService from '../shared/service/DataBaseService';
import { useLogin } from '../components/LoginContext';

const SelectCity = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [availableRooms, setAvailableRooms] = useState(data.rooms);
  const [bookedRooms, setBookedRooms] = useState([]);
  const {login,showUserDashboard,setShowuserDashboard} = useLogin()

  const {id} = useParams()
    useEffect(()=>{
    },[])
  const addItem = (room) => {
    bookedRooms.push(room)
    sessionStorage.setItem(id,JSON.stringify(bookedRooms))
    
   
    // setInputValue('');
  };
  // Function to handle booking a room
  const handleBookRoomClick = (room) => {
    addItem(room)
    
    DbService.post("bookedRooms",room).then((res)=>{})
    // Pass booked room to parent component
    window.alert('Room Booked Successfully');
  };

  // Function to handle city selection
  const handleCitySelect = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    const rooms = data.rooms.filter(room => room.city === city && !room.booked);
    setAvailableRooms(rooms);
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
          {data.cities.map(city => (
            <option key={city.id} value={city.city}>{city.city}</option>
          ))}
        </select>
      </div>
      <div className="row mt-4">
        {availableRooms.map(room => (
          <div key={room.id} className="col-md-4">
            <RoomCard room={room} onBook={() => handleBookRoomClick(room)} />
          </div>
        ))}
      </div>
    </div>
  );
}
else{
  <></>
}
};

export default SelectCity;
