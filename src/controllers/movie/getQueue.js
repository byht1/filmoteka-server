const { Movie } = require("../../models/movie");

const getQueue = async (req, res) => {
  const { id: owner } = req.user;
  const { page = 1 } = req.query;
  const { language: lang } = req.params;

  const language = lang === "en" ? "en-US" : "uk-UA";

  const result = await Movie.find(
    { owner, library: "queue", language },
    "-createdAt -updatedAt"
  );

  const total = result.length;
  const data = result.filter(
    (x, i) => (x, i) => i < page * 20 && i >= page * 20 - 20
  );

  res.json({ data, total });
};

module.exports = getQueue;
