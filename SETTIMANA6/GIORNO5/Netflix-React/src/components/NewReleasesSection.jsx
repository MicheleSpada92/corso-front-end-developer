import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const NewReleasesSection = () => {
  const [newReleasesMovies, setNewReleasesMovies] = useState([]);

  useEffect(() => {
    // Effettua la chiamata API qui
    const fetchData = async () => {
      try {
        // Modifica l'URL del tuo endpoint API per ottenere i nuovi rilasci di Harry Potter
        const response = await fetch('http://www.omdbapi.com/?s=harry+potter&type=movie&apikey=503d6cac');
        const data = await response.json();
        // Imposta i dati ricevuti nello stato
        setNewReleasesMovies(data.Search || []); // Assicurati di controllare se data.Search è definito
      } catch (error) {
        console.error('Errore durante il recupero dei dati:', error);
      }
    };

    fetchData();
  }, []); // L'array vuoto come secondo argomento assicura che l'effetto venga eseguito solo al mount

  return (
    <div className="container">
      <h4>New Releases</h4>
      <div className="row">
        {newReleasesMovies.map((movie) => (
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

export default NewReleasesSection;
