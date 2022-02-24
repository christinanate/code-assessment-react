import React from 'react';
import LocationCard from './LocationCard.js';

const Locations = ({ locations }) => {
  return (
    <div className="locationsContainer">
      {locations.map((locationObj) => <LocationCard key={locationObj.id} locationObj={locationObj} />)}
    </div>
  );
};

export default Locations;