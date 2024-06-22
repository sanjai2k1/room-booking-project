import React, { useEffect, useState } from 'react';
import RoomCard from '../components/RoomCard';
import data from '../data/roomdata.json'; // Import your data
import { useLocation } from 'react-router-dom';

const SelectCity = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [availableRooms, setAvailableRooms] = useState(data.rooms);
  const [items, setItems] = useState([]);
    useEffect(()=>{
        sessionStorage.clear()
    },[])
  const addItem = (room) => {

    
    items.push(room)
   sessionStorage.clear();
    // const newItem = { name:  {room} };
    // const newItems = [...items, newItem];
    // setItems(newItems);
    sessionStorage.setItem('bookedrooms', JSON.stringify(items));
    // setInputValue('');
  };
  // Function to handle booking a room
  const handleBookRoomClick = (room) => {
    
    
    addItem(room)
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
};

export default SelectCity;
