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
  } = await dataMovie(movieId, "en-US");

  const {
    genres: genresUK,
    title: titleUK,
    poster_path: posterPathUK,
    id: idUK,
    vote_average: voteAverageUK,
  } = await dataMovie(movieId, "uk-UA");

  const genreID = genres.map((x) => x.id);
  const genreIDUK = genresUK.map((x) => x.id);

  const { id: owner } = req.user;

  const response = await Movie.create({
    id,
    title,
    poster_path: posterPath,
    genre_ids: genreID,
    vote_average: voteAverage,
    library,
    language: "en-US",
    owner,
  });

  const responseUK = await Movie.create({
    id: idUK,
    title: titleUK,
    poster_path: posterPathUK,
    genre_ids: genreIDUK,
    vote_average: voteAverageUK,
    library,
    language: "uk-UA",
    owner,
  });

  if (language === "en-US") {
    res.status(200).json(response);
  } else {
    res.status(200).json({ response: responseUK });
  }
};

module.exports = add;
