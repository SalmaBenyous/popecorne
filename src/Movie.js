import React from "react";

function Movie({ movies, loding, error, setSelectedId, handelClikc1 }) {
  function handelClikc(id) {
    setSelectedId(id);
    handelClikc1();
  }
  return loding ? (
    <p className="loader">Loading...</p>
  ) : error ? (
    <p className="error">
      <span>⛔️</span> {error}
    </p>
  ) : movies.length === 0 ? (
    <p className="error">
      <span>⛔️</span>No movies found
    </p>
  ) : (
    movies?.map((movie) => (
      <li key={movie.imdbID} onClick={() => handelClikc(movie.imdbID)}>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <div>
          <p>
            <span>🗓</span>
            <span>{movie.Year}</span>
          </p>
        </div>
      </li>
    ))
  );
}

export default Movie;
