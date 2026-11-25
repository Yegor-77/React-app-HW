import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/api";
import MovieList from "../components/MovieList";

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getTrendingMovies()
      .then(setMovies)
      .catch(() => setError("Something went wrong. Please try again."));
  }, []);

  return (
    <main className="container">
      <h1>Trending today</h1>

      {error && <p className="error">{error}</p>}

      <MovieList movies={movies} />
    </main>
  );
}

export default Home;

