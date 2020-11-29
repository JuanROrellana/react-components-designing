import React from 'react';

const SpeakerFavoriteButton = ({ isFavorite }) => {
  return (
    <div className={isFavorite ? 'heartredbutton' : 'heartdarkbutton'}/>
  );
};

export default SpeakerFavoriteButton;
