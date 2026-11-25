import axios from "axios";

const API_KEY = "ВСТАВЬ_СЮДА_СВОЙ_TMDB_API_KEY";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

export const getTrendingMovies = async () => {
  const response = await api.get("/trending/movie/day");
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await api.get("/search/movie", {
    params: { query },
  });
  return response.data.results;
};

export const getMovieDetails = async (id) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

export const getMovieCredits = async (id) => {
  const response = await api.get(`/movie/${id}/credits`);
  return response.data.cast;
};

export const getMovieReviews = async (id) => {
  const response = await api.get(`/movie/${id}/reviews`);
  return response.data.results;
};
