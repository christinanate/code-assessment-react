import React from 'react';

const LocationCard = ({ locationObj, handleLocationCardSelection, selectedLocation }) => {
  let cardStyle = selectedLocation.id === locationObj.id ? 'locationCardSelected' : 'locationCard';
  return (
    <div
      className={cardStyle}
      onClick={() => handleLocationCardSelection(locationObj)}
    >
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