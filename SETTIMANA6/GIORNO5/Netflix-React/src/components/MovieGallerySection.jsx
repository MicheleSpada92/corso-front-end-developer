// MovieGallerySection.js
import React from 'react';
import MovieCard from './MovieCard';

const MovieGallerySection = ({ title, movies }) => {
  return (
    <div>
      <h4>{title}</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
        {movies.map(movie => (
          <div className="col mb-2 px-1" key={movie.imdbID}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGallerySection;
