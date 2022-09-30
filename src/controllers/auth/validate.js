const jwt = require("jsonwebtoken");

const { User } = require("../../models/user");

const { SECRET_KEY } = process.env;

const validate = async (req, res) => {
  const { id } = req.user;

  const payload = {
    id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  const { email } = await User.findByIdAndUpdate(id, { token });

  res.json({ token, email });
};

module.exports = validate;
