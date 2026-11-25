import PropTypes from "prop-types";
import MovieListItem from "./MovieListItem";

function MovieList({ movies }) {
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieList;
