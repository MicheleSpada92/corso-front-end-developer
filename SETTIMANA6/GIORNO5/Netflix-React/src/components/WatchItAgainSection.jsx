import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const WatchItAgainSection = () => {
  const [watchItAgainMovies, setWatchItAgainMovies] = useState([]);

  useEffect(() => {
    // Effettua la chiamata API qui
    const fetchData = async () => {
      try {
        const response = await fetch('http://www.omdbapi.com/?apikey=503d6cac&s=Lord%20of%20the%20Rings&type=movie');
        const data = await response.json();
        
        if (data.Response === "True") {
          // Se la risposta è "True", allora abbiamo dati validi
          setWatchItAgainMovies(data.Search || []); // Assumendo che i dati contengano un array di film
        } else {
          console.error('Errore durante la chiamata API:', data.Error);
        }
      } catch (error) {
        console.error('Errore durante il recupero dei dati:', error);
      }
    };

    fetchData();
  }, []); // L'array vuoto come secondo argomento assicura che l'effetto venga eseguito solo al mount

  return (
    <div className="container">
      <h4>Watch it Again</h4>
      <div className="row">
        {watchItAgainMovies.map((movie) => (
          <div key={movie.imdbID} className="col mb-2 px-1">
            <MovieCard
              title={movie.Title}
              year={movie.Year}
              imdbID={movie.imdbID}
              type={movie.Type}
              poster={movie.Poster}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchItAgainSection;
