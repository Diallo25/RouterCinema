import React from 'react';
import { useParams, Link } from 'react-router-dom';
import movies from './Movies';

function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <p>Film non trouvé.</p>;

  return (
    <div className='movie-detail-container'>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <div>
        <iframe
          width="560"
          height="315"
          src={movie.trailerUrl}
          title={movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">Retour à la page d'accueil</Link>
    </div>
  );
}

export default MovieDetail;
