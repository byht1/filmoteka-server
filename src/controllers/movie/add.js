const { Movie } = require("../../models/movie");

const { dataMovie } = require("../../API/api");

const add = async (req, res) => {
  const { id: movieId, library, language = "en-US" } = req.body;

  const {
    genres,
    title,
    poster_path: posterPath,
    id,
    vote_average: voteAverage,
  } = await dataMovie(movieId, language);

  const genreID = genres.map((x) => x.id);

  const { id: owner } = req.user;

  const response = await Movie.create({
    id,
    title,
    poster_path: posterPath,
    genre_ids: genreID,
    vote_average: voteAverage,
    library,
    owner,
  });

  res.status(200).json(response);
};

module.exports = add;
