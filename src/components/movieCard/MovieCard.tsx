import VoteRate from "../voteRate/VoteRate";

function MovieCard(props: { movie: any; apiKey: string; index: number }) {
  let voteAverage = props.movie.vote_average * 10 || 0;

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
          <VoteRate value={voteAverage} />
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
