// const { userJoi, User } = require("../../models/user");
const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");

const { v4: uuidv4 } = require("uuid");

const { createError, emailActivity } = require("../../helpers");

const signUp = async (req, res) => {
  const { email, password } = req.body;
  // const { error } = userJoi.validate(req.body);

  // if (error) {
  //   throw createError(400, "error in the disability");
  // }

  const isNewUser = await User.findOne({ email });

  if (isNewUser) {
    throw createError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const activateLink = uuidv4();

  const result = await User.create({
    email,
    password: hashPassword,
    activateLink,
  });

  emailActivity(email, activateLink);

  res.status(201).json({ result });
};

module.exports = signUp;
