const axios = require("axios");

const KEY = "8478375b0b2eb45c66ac10717e1ab9a2";
const URL = "https://api.themoviedb.org/";

axios.defaults.baseURL = URL;

const dataMovie = async (movieId, language = "en-US") => {
  try {
    const server = await axios.get(
      `3/movie/${movieId}?api_key=${KEY}&language=${language}`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  dataMovie,
};
