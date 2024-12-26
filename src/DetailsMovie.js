import { useEffect } from "react";
import Rating from "./Rating";
function DetailsMovie({
  detail,
  onCloseMovie,
  lodingDetails,
  handleAdd,
  isWatched,
}) {
  useEffect(() => {
    if (detail) {
      document.title = `Details - ${detail.Title}`;
    }
    return () => (document.title = "Movies App");
  }, [detail]);
  return lodingDetails ? (
    <p className="loader">Loading...</p>
  ) : (
    <div className="details">
      <header>
        <button className="btn-back" onClick={onCloseMovie}>
          {/*onClick={onCloseMovie}*/}
          &larr;
        </button>
        <img src={detail.Poster} alt={`Poster of ${detail.Title} movie`} />
        <div className="details-overview">
          <h2>{detail.Title}</h2>
          <p>
            {detail.Released} &bull; {detail.Runtime}
          </p>
          <p>{detail.Genre}</p>
          <p>
            <span>⭐️</span>
            {detail.ImdbRating} IMDb rating
          </p>
        </div>
      </header>
      <section>
        {!isWatched && (
          <div className="rating">
            <Rating maxReting={5} />
          </div>
        )}

        {!isWatched && (
          <button className="btn-add" onClick={() => handleAdd(detail)}>
            + Add to list
          </button>
        )}

        <p>
          <em>{detail.Plot}</em>
        </p>
        <p>Starring {detail.Actors}</p>
        <p>Directed by {detail.Director}</p>
      </section>
    </div>
  );
}

export default DetailsMovie;
