import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ListBox from "./ListBox";
import WachedMovies from "./WachedMovies";
import Movie from "./Movie";

import Main from "./Main";
import NumberResult from "./NumberResult";
import Summary from "./Summary";
import ListMovieWatched from "./ListMovieWatched";

import axios from "axios";
import DetailsMovie from "./DetailsMovie";
const KEY = "2fbe17b1";
export default function App() {
  const [query, setQuery] = useState("");
  const [loding, setLoding] = useState(false);
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [detail, setDetail] = useState(null);
  const [error, setError] = useState(null);
  const [lodingDetails, setLodingDetalis] = useState(false);

  function onCloseMovie() {
    setDetail(null);
  }

  function handelClikc1() {
    setDetail(null);
    setLodingDetalis(true);
    if (!selectedId) return; // التأكد من وجود selectedId

    axios
      .get(`https://omdbapi.com/?apikey=${KEY}&i=${selectedId}`)
      .then((response) => {
        setDetail(response.data); // تحديث حالة تفاصيل الفيل
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        setLodingDetalis(false);
      })
      .finally(() => {
        setLodingDetalis(false);
      });
  }
  const isWatched = watched.some((prevent) => prevent.imdbID === selectedId);
  useEffect(() => {
    if (!query) return;
    setLoding(true);
    setError(null);
    axios
      .get(`https://omdbapi.com/?apikey=${KEY}&s=${query}`)
      .then((response) => {
        if (response.data.Search) {
          setMovies(response.data.Search);
        } else {
          setMovies([]);
          setError("No movies found");
        }
      })
      .catch((error) => {
        setLoding(false);
        setError(error.message);
      })
      .finally(() => {
        setLoding(false);
      });
  }, [query]);
  function handleAdd(movie) {
    if (!isWatched) {
      setWatched((preventMovies) => [...preventMovies, movie]);
      setDetail(null);
    } else {
      setWatched((prevent) => [...prevent]);
      setDetail(null);
    }
  }
  return (
    <>
      {/**  render component NavBar */}

      <NavBar query={query} setQuery={setQuery}>
        <NumberResult movies={movies} />
      </NavBar>
      {/**  render component Main */}
      <Main>
        {/**  render component ListBox */}
        <ListBox>
          <Movie
            handelClikc1={handelClikc1}
            setSelectedId={setSelectedId}
            error={error}
            loding={loding}
            movies={movies}
          />
        </ListBox>
        {/**  render component WatchedMovies */}
        <WachedMovies>
          {detail ? (
            <DetailsMovie
              handleAdd={handleAdd}
              lodingDetails={lodingDetails}
              detail={detail}
              onCloseMovie={onCloseMovie}
              isWatched={isWatched}
              query={query}
            />
          ) : (
            <>
              {watched && watched.length > 0 ? (
                <>
                  <Summary watched={watched} />
                  <ul className="list">
                    <ListMovieWatched watched={watched} className="box" />
                  </ul>
                </>
              ) : (
                <>
                  <Summary watched={watched} />
                  <p className="loader">No watched movies</p>
                </>
              )}
            </>
          )}
        </WachedMovies>
        {/* <WachedMovies>
          <Summary watched={watched}/>
          <DetailsMovie handleAdd={handleAdd} lodingDetails={lodingDetails} detail={detail} onCloseMovie={onCloseMovie}/>
          <ListMovieWatched watched={watched}/>
        </WachedMovies> */}
      </Main>
    </>
  );
}
