import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../movieCard/MovieCard";

enum ListType {
  POPULAR = "popular",
  UPCOMING = "upcoming",
  TOP_RATED = "top_rated",
}

enum SortType {
  ASC = "asc",
  DESC = "desc",
}

function MoviesList() {
  const [listType, setListType] = useState(ListType.POPULAR);
  const [sortType, setSortType] = useState(SortType.ASC);
  const [moviesData, setMoviesData] = useState<any[] | []>([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const apiKey = "4f298a53e552283bee957836a529baec";

  useEffect(() => {
    axios
      .get(
        `http://api.themoviedb.org/3/discover/movie?sort_by=${listType}.${sortType}&api_key=${apiKey}`
      )
      .then(
        (response) => {
          console.log("response", response);
          setMoviesData(response.data.results);
        },
        (error) => setErrorMessage(error.message)
      );
  }, [listType]);

  return (
    <div className="movies-section">
      <aside>
        <h1 className="movies-header">{`${listType.replace(
          "_",
          "-"
        )} Movies`}</h1>
        <button
          className={`movies-action ${
            listType === ListType.POPULAR ? `movies-action--selected` : ""
          }`}
          onClick={() => setListType(ListType.POPULAR)}
        >
          Popular
        </button>
        <button
          className={`movies-action ${
            listType === ListType.UPCOMING ? `movies-action--selected` : ""
          }`}
          onClick={() => setListType(ListType.UPCOMING)}
        >
          Upcoming
        </button>
        <button
          className={`movies-action ${
            listType === ListType.TOP_RATED ? `movies-action--selected` : ""
          }`}
          onClick={() => setListType(ListType.TOP_RATED)}
        >
          Top-Rated
        </button>
        <div className="movies-sort-actions">
          <button
            className={`movies-action ${
              sortType === SortType.ASC ? `movies-action--selected` : ""
            }`}
            onClick={() => {
              if (sortType !== SortType.ASC) {
                setSortType(SortType.ASC);
                setMoviesData(moviesData.reverse());
              }
            }}
          >
            ASC
          </button>
          <button
            className={`movies-action ${
              sortType === SortType.DESC ? `movies-action--selected` : ""
            }`}
            onClick={() => {
              if (sortType !== SortType.DESC) {
                setSortType(SortType.DESC);
                setMoviesData(moviesData.reverse());
              }
            }}
          >
            DESC
          </button>
        </div>
      </aside>

      <main>
        <ul className="movies-list">
          {moviesData?.map((movie: any, index: number) => {
            return (
              <li key={index}>
                <MovieCard index={index} movie={movie} apiKey={apiKey} />
              </li>
            );
          })}
        </ul>
        {errorMessage && <div>{errorMessage}</div>}
      </main>
    </div>
  );
}

export default MoviesList;
