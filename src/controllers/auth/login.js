const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// const { userJoi, User } = require("../../models/user");
const { User } = require("../../models/user");

const { createError } = require("../../helpers");

const { SECRET_KEY } = process.env;

const logIn = async (req, res) => {
  const { email, password } = req.body;

  // const { error } = userJoi.validate(req.body);
  // if (error) {
  //   throw createError(400, "error in the disability");
  // }

  const user = await User.findOne({ email });
  if (!user) {
    throw createError(401, "user does not exist");
  }

  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    throw createError(401, "Email or password is wrong");
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  const { isActivate } = await User.findByIdAndUpdate(user._id, { token });

  res.json({ token, isActivate });
};

module.exports = logIn;
