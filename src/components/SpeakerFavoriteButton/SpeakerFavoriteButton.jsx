import React from 'react';

const SpeakerFavoriteButton = ({ isFavorite, onFavoriteToggle }) => {
  return (
    <div className={isFavorite ? 'heartredbutton' : 'heartdarkbutton'}
         onClick={onFavoriteToggle}
    />
  );
};

export default SpeakerFavoriteButton;
