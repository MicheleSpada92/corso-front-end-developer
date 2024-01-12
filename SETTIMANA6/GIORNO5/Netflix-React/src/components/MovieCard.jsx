// MovieCard.jsx
import React from 'react';

const MovieCard = ({ title, year, imdbID, type, poster }) => {
  return (
    <div className="card">
      {poster ? (
        <img src={poster} className="card-img-top" alt={`${title} Poster`} />
      ) : (
        <div className="no-poster">No Poster Available</div>
      )}
      <div className="card-body">

      </div>
    </div>
  );
};

export default MovieCard;
