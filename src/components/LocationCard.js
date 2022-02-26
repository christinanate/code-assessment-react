import React from 'react';

const LocationCard = ({ locationObj, handleLocationCardSelection, selectedLocation, openMoreInfo }) => {
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

      <div className='buttonContainer'>
        <button >DIRECTIONS</button>
        <button onClick={() => openMoreInfo()}>MORE INFO</button>
      </div>

    </div>
  );
};

export default LocationCard;