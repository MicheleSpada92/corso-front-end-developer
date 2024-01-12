// MovieGallery.js
import React, { useEffect, useState } from 'react';
import MovieGallerySection from './MovieGallerySection';

const MovieGallery = ({ title, searchQuery }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [watchAgainMovies, setWatchAgainMovies] = useState([]);
  const [newReleasesMovies, setNewReleasesMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingResponse = await fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=503d6cac`);
        const trendingData = await trendingResponse.json();
        setTrendingMovies(trendingData.Search);

        // Puoi eseguire le chiamate API per le altre sezioni nello stesso modo...
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div>
      <MovieGallerySection title="Trending Now" movies={trendingMovies} />
      <MovieGallerySection title="Watch it Again" movies={watchAgainMovies} />
      <MovieGallerySection title="New Releases" movies={newReleasesMovies} />
    </div>
  );
};

export default MovieGallery;
