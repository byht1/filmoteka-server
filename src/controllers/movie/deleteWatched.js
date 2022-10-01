const { Movie } = require("../../models/movie");

const deleteWatched = async (req, res) => {
  const { id: owner } = req.user;
  const { id } = req.params;

  const languageUS = "en-US";
  const languageUK = "uk-UA";

  const result = await Movie.findOneAndDelete({
    owner,
    id,
    library: "watched",
    language: languageUS,
  });
  await Movie.findOneAndDelete({
    owner,
    id,
    library: "watched",
    language: languageUK,
  });

  res.json(result);
};

module.exports = deleteWatched;
