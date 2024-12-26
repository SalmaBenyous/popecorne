import React from "react";

function ListMovieWatched({ watched }) {
  return watched.map((movie) => (
    <li key={movie.imdbID} className="list">
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.imdbVotes}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.Runtime}</span>
        </p>
      </div>
    </li>
  ));
}

export default ListMovieWatched;
