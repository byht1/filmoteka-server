const { User } = require("../../models/user");

const activate = async (req, res) => {
  const { activateLink } = req.params;

  await User.findOneAndUpdate({ activateLink }, { isActivate: true });

  res.redirect("https://byht1.github.io/filmoteka-team-project/");
};

module.exports = activate;
