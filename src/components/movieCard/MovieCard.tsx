import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function MovieCard(props: { movie: any; apiKey: string; index: number }) {
  let percentage = props.movie.vote_average || 0;

  return (
    <div className="movie-card">
      {props.movie.poster_path ? (
        <img
          className="movie-card__img"
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${props.movie.poster_path}`}
          alt={`${props.movie.title || "The movie"}'s poster`}
        />
      ) : (
        // In case the movies doesn't have a poster image, render a gray-scaled div instead.
        <div
          className="movie-card__img"
          title={`${props.movie.title || "The movie"}'s poster`}
        ></div>
      )}

      <div className="movie-card__data">
        <div className="movie-card__vote">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            background
            styles={{
              path: {
                stroke: "#21d07a",
              },
              trail: {
                stroke: "gray",
              },
              text: {
                fill: "white",
                fontSize: "26px",
                fontWeight: "bold",
              },
              background: {
                fill: "black",
              },
            }}
          />
        </div>

        <div className="movie-card__title">{props.movie.title}</div>
        {props.movie.release_date && (
          <div className="movie-card__date">
            {new Date(props.movie.release_date).toLocaleString("en-us", {
              month: "short",
              year: "numeric",
              day: "numeric",
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
