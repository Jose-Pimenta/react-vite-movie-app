const API_key = "0674cdaaf6afbf0c6a8ce92d7a7b45ac";
const API_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${API_URL}/movie/popular?api_key=${API_key}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${API_URL}/search/movie?api_key=${API_key}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
