import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

function MoviesList(props: { apiKey: string }) {
  const [listType, setListType] = useState(ListType.POPULAR);
  const [sortType, setSortType] = useState(SortType.ASC);
  const [moviesData, setMoviesData] = useState<any[] | []>([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${listType}?api_key=${props.apiKey}&language=en-US&page=1`
      )
      .then(
        (response) => {
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
                <Link to={`/movie/${movie.id}`}>
                  <MovieCard
                    index={index}
                    movie={movie}
                    apiKey={props.apiKey}
                  />
                </Link>
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
