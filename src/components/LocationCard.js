import React from 'react';

const LocationCard = ({ locationObj }) => {
  return (
    <div className="locationCard">
      <p>{locationObj.name}</p>
      <div className="locationCard-address">
        <p>{locationObj.address}</p>
        <p>{locationObj.city}, {locationObj.state} {locationObj.postal_code}</p>
      </div>
      <p>Open till some time today</p>
    </div>
  );
};

export default LocationCard;