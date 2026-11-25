import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../services/api";

function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setMovie(null);
    setError("");

    getMovieDetails(movieId)
      .then(setMovie)
      .catch(() => setError("Movie not found."));
  }, [movieId]);

  const backLink = location.state?.from ?? "/movies";

  if (error) {
    return (
      <main className="container">
        <p>{error}</p>
      </main>
    );
  }

  if (!movie) {
    return (
      <main className="container">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="container">
      <Link className="back-link" to={backLink}>
        Go back
      </Link>

      <div className="movie-details">
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        )}

        <div>
          <h1>{movie.title}</h1>

          <p>User score: {Math.round(movie.vote_average * 10)}%</p>

          <h2>Overview</h2>
          <p>{movie.overview || "No overview available."}</p>

          <h2>Genres</h2>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>

      <div className="additional-info">
        <h2>Additional information</h2>

        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>

      <Outlet />
    </main>
  );
}

export default MovieDetails;
