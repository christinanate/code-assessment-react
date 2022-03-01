import React from 'react';
import LocationCard from './LocationCard.js';

const Locations = ({ locations, handleLocationCardSelection, selectedLocation, openMoreInfo, currentDay }) => {
  return (
    <div className='locationsContainer'>
      {locations.map((locationObj) =>
        <LocationCard
          key={locationObj.id}
          locationObj={locationObj}
          selectedLocation={selectedLocation}
          currentDay={currentDay}
          handleLocationCardSelection={handleLocationCardSelection}
          openMoreInfo={openMoreInfo} />)}
    </div>
  );
};

export default Locations;