import React from 'react';

const SelectedRooms = ({ bookedRooms }) => (
  <div>
    <h2>Selected Rooms</h2>
    <div className="row">
      {bookedRooms.length > 0 ? (
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
);

export default SelectedRooms;
