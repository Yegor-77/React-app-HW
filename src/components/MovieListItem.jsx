import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

function MovieListItem({ movie }) {
  const location = useLocation();

  return (
    <li className="movie-item">
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <div className="no-poster">No poster</div>
        )}

        <h3>{movie.title}</h3>
      </Link>
    </li>
  );
}

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    poster_path: PropTypes.string,
  }).isRequired,
};

export default MovieListItem;

