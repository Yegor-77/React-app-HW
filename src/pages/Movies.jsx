import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/api";
import MovieList from "../components/MovieList";

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const searchQuery = searchParams.get("query");

  useEffect(() => {
    if (!searchQuery) {
      setMovies([]);
      return;
    }

    searchMovies(searchQuery)
      .then(setMovies)
      .catch(() => setError("Something went wrong. Please try again."));
  }, [searchQuery]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    setError("");
    setSearchParams({ query: trimmedQuery });
  };

  return (
    <main className="container">
      <h1>Search movies</h1>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search movies..."
        />

        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      <MovieList movies={movies} />
    </main>
  );
}

export default Movies;
