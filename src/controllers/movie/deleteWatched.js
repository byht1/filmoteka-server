const { Movie } = require("../../models/movie");

const deleteWatched = async (req, res) => {
  const { id: owner } = req.user;
  const { id } = req.params;

  const result = await Movie.findOneAndDelete({
    owner,
    id,
    library: "watched",
  });

  res.json(result);
};

module.exports = deleteWatched;
