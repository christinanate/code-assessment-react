import React from 'react';
import LocationCard from './LocationCard.js';

const Locations = ({ locations, handleLocationCardSelection, selectedLocation }) => {
  return (
    <div className="locationsContainer">
      {locations.map((locationObj) =>
        <LocationCard
          key={locationObj.id}
          locationObj={locationObj}
          handleLocationCardSelection={handleLocationCardSelection}
          selectedLocation={selectedLocation} />)}
    </div>
  );
};

export default Locations;