import React, { useEffect, useState } from 'react';
import DbService from '../shared/service/DataBaseService';
import { useParams } from 'react-router-dom';
import { useLogin } from '../components/LoginContext';

const SelectedRooms = () => {
    const [bookedRooms,setBookedRooms]=useState([])
    const {id} = useParams()
    const {login,showUserDashboard,setShowuserDashboard} = useLogin()

    useEffect( ()=>{
      DbService.getById("users",id).then((res)=>{
        setBookedRooms(res.data.bookedrooms)
      })
      console.log(bookedRooms)
    },[])
    const cancel = (index)=>{
      const filtered = bookedRooms.filter((br,ind)=>ind!==index)
      
      DbService.update("users",id,)



    }
    
    if(login && showUserDashboard)
      {

    return (
  <div>
    <h2>Selected Rooms</h2>
    <div className="row">
      {bookedRooms ? (
        bookedRooms.map((room,ind) => (
          <div key={room.id} className="col-md-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src={room.image} className="card-img-top" alt="Room" />
              <div className="card-body">
                <h5 className="card-title">{room.city}</h5>
                <p className="card-text">{room.info}</p>
                <button onClick={()=>cancel(ind)}>Cancel Room</button>
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
  else{
    <></>
  }
}

export default SelectedRooms;
