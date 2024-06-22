import React, { useEffect, useState } from 'react';
import DbService from '../shared/service/DataBaseService';

const SelectedRooms = () => {
    const [bookedRooms,setBookedRooms]=useState([])

    
    useEffect( ()=>{
      DbService.get("bookedRooms").then((res)=>{
        setBookedRooms(res.data)
      })
    },[])
    

    return (
  <div>
    <h2>Selected Rooms</h2>
    <div className="row">
      {bookedRooms ? (
        bookedRooms.map(room => (
          <div key={room.id} className="col-md-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src={room.image} className="card-img-top" alt="Room" />
              <div className="card-body">
                <h5 className="card-title">{room.city}</h5>
                <p className="card-text">{room.info}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No rooms booked yet.</p>
      )}
    </div>
  </div>
    )
}

export default SelectedRooms;
