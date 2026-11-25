import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../services/api";

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getMovieReviews(movieId)
      .then(setReviews)
      .catch(() => setError("Unable to load reviews."));
  }, [movieId]);

  if (error) return <p>{error}</p>;

  return (
    <section className="reviews-section">
      <h2>Reviews</h2>

      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        reviews.map((review) => (
          <article className="review-item" key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </article>
        ))
      )}
    </section>
  );
}

export default Reviews;
