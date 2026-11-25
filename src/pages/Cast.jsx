import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../services/api";

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getMovieCredits(movieId)
      .then(setCast)
      .catch(() => setError("Unable to load cast."));
  }, [movieId]);

  if (error) return <p>{error}</p>;

  return (
    <section className="cast-section">
      <h2>Cast</h2>

      <ul className="cast-list">
        {cast.map((actor) => (
          <li key={actor.id}>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <div className="no-poster">No photo</div>
            )}

            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Cast;
