import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";

const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const Cast = lazy(() => import("./pages/Cast"));
const Reviews = lazy(() => import("./pages/Reviews"));

function App() {
  return (
    <div className="app">
      <Header />

      <Suspense fallback={<p className="loading">Loading page...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<Movies />} />

          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
