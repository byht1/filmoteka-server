const { Movie } = require("../../models/movie");

const getWatched = async (req, res) => {
  const { id: owner } = req.user;
  const { page = 1 } = req.query;

  const result = await Movie.find(
    { owner, library: "watched" },
    "-createdAt -updatedAt"
  );

  const total = result.length;
  const data = result.filter((x, i) => i < page * 20 && i >= page * 20 - 20);

  res.json({ data, total });
};

module.exports = getWatched;
