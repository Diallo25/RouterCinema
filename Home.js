import React from 'react';
import { Link } from 'react-router-dom';
import movies from './Movies';

function Home() {
  return (
    <div>
      <h1>Liste de films</h1>
      <div className="movies-container">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>
            <p>Note : {movie.rating}</p>
            <Link to={`/movie/${movie.id}`}>Voir les détails</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
