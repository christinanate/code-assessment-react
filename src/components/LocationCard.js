import React from 'react';

const handleDirectionsButtonClick = (locationAddress) => {
  window.open(`https://www.google.com/maps/search/?api=1&query=${locationAddress}`);
};

const LocationCard = ({ locationObj, handleLocationCardSelection, selectedLocation, openMoreInfo, currentDay }) => {
  let cardStyle = selectedLocation.id === locationObj.id ? 'locationCardSelected' : 'locationCard';
  return (
    <div
      className={cardStyle}
      onClick={() => handleLocationCardSelection(locationObj)}
    >
      <p style={{ fontWeight: '600' }}>{locationObj.name}</p>
      <div className='addressContainer'>
        <p>{locationObj.address}</p>
        <p>{locationObj.city}, {locationObj.state} {locationObj.postal_code}</p>
      </div>
      <p style={{ color: 'orangered' }}>Open till {locationObj[`${currentDay}_close`]} today</p>

      <div className='buttonContainer'>
        <button onClick={() => handleDirectionsButtonClick(locationObj.address)}>DIRECTIONS</button>
        <button onClick={() => openMoreInfo()}>MORE INFO</button>
      </div>

    </div>
  );
};

export default LocationCard;