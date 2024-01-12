import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const TrendingNowSection = () => {
  const [trendingNowMovies, setTrendingNowMovies] = useState([]);

  useEffect(() => {
    // Effettua la chiamata API qui
    const fetchData = async () => {
      try {
        const response = await fetch('http://www.omdbapi.com/?s=anime&type=movie&apikey=503d6cac');
        const data = await response.json();

        if (data.Response === 'True') {
          // Se la risposta è positiva, imposta i dati ricevuti nello stato
          setTrendingNowMovies(data.Search || []);
        } else {
          console.error('Errore nella risposta API:', data.Error);
        }
      } catch (error) {
        console.error('Errore durante il recupero dei dati:', error);
      }
    };

    fetchData();
  }, []); // L'array vuoto come secondo argomento assicura che l'effetto venga eseguito solo al mount

  return (
    <div className="container">
      <h4>Trending Now</h4>
      <div className="row">
        {trendingNowMovies.map((movie) => (
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

export default TrendingNowSection;
