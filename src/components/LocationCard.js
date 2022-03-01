import React from 'react';
import phoneIcon from '../assets/phone-icon.png';

const handleDirectionsButtonClick = (locationAddress) => {
  window.open(`https://www.google.com/maps/search/?api=1&query=${locationAddress}`);
};

const LocationCard = ({ locationObj, handleLocationCardSelection, selectedLocation, tacoImageUrl, openMoreInfo, currentDay }) => {
  let cardStyle = selectedLocation.id === locationObj.id ? 'locationCardSelected' : 'locationCard';
  return (
    <div className={cardStyle} onClick={() => handleLocationCardSelection(locationObj)}>
      <div className='truckDetailsContainer'>
        <div>
          <p style={{ fontWeight: '600' }}>{locationObj.name}</p>
          <div className='addressContainer'>
            <p>{locationObj.address}</p>
            <p>{locationObj.city}, {locationObj.state} {locationObj.postal_code}</p>
          </div>
          <p><img alt='phoneIcon' src={phoneIcon}></img> (605) 258 6978</p>
          <p style={{ color: 'orangered' }}>Open till {locationObj[`${currentDay}_close`]} today</p>
        </div>
        <img className='thumbnail' alt='thumbnailTaco' src={tacoImageUrl}></img>
      </div>

      <div className='buttonContainer'>
        <button onClick={() => handleDirectionsButtonClick(locationObj.address)}>DIRECTIONS</button>
        <button onClick={() => openMoreInfo()}>MORE INFO</button>
      </div>

    </div>
  );
};

export default LocationCard;