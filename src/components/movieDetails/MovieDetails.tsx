import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VoteRate from "../voteRate/VoteRate";
import ListIcon from "../../images/list.svg";
import LikeIcon from "../../images/heart.svg";
import BookmarkIcon from "../../images/bookmark.svg";
import StarIcon from "../../images/star.svg";
import CharacterCard from "../characterCard/CharacterCard";

interface ParamTypes {
  movieId: string;
}

function MovieDetails(props: { apiKey: string }) {
  const { movieId } = useParams<ParamTypes>();
  const [movieData, setMovieData] = useState<any>(null);
  const [movieCast, setMovieCast] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // Get movie's cast
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${props.apiKey}&language=en-US`
      )
      .then(
        (response) => {
          setMovieCast(response.data.cast);
        },
        (error) => {
          if (!errorMessage) {
            setErrorMessage(
              error.response?.data?.status_message || error.message
            );
          }
        }
      );
    // Get movie's details
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${props.apiKey}&language=en-US`
      )
      .then(
        (response) => {
          setMovieData(response.data);
        },
        (error) => {
          if (!errorMessage) {
            setErrorMessage(
              error.response?.data?.status_message || error.message
            );
          }
        }
      );
  }, []);

  console.log(movieData, movieCast);
  return (
    <>
      <div className="movie-data">
        <div
          className="movie-cover"
          style={{
            backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movieData?.backdrop_path})`,
          }}
        ></div>
        {movieData && (
          <div className="movie-summary">
            <img
              className="movie-poster"
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movieData?.poster_path}`}
              alt={`${movieData?.title || "The movie"}'s poster`}
            />
            <div className="movie-details">
              <div className="movie-header">
                <h1 className="movie-header__title">
                  {movieData?.title}
                  <span className="movie-header__year">
                    ({new Date(movieData?.release_date).getFullYear()})
                  </span>
                </h1>
              </div>

              <div className="movie-actions">
                <div className="movie-actions__vote">
                  <VoteRate value={movieData.vote_average * 10} />
                </div>
                <span>User Score</span>
                <button className="movie-actions__list">
                  <img src={ListIcon} alt="List Button" />
                </button>
                <button className="movie-actions__like">
                  <img src={LikeIcon} alt="List Button" />
                </button>
                <button className="movie-actions__bookmark">
                  <img src={BookmarkIcon} alt="List Button" />
                </button>
                <button className="movie-actions__star">
                  <img src={StarIcon} alt="List Button" />
                </button>
              </div>

              <div className="movie-tagline">{movieData.tagline}</div>

              <h3 className="movie-overview__header">Overview</h3>
              <p className="movie-overview__paragraph">{movieData.overview}</p>

              <h3></h3>
            </div>
          </div>
        )}
      </div>

      {movieCast?.length && (
        <div className="movie-cast">
          <h2 className="movie-cast__header">Movie Cast</h2>
          <ul className="movie-cast__list">
            {movieCast.map((character, index) => {
              return (
                <li key={index}>
                  <CharacterCard
                    name={character.name}
                    photo={character.profile_path}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
