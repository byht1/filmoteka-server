const express = require("express");
const { basedir } = global;

const { ctrlWrapper } = require(`${basedir}/helpers`);
const {
  signUp,
  logIn,
  logOut,
  validate,
} = require(`${basedir}/controllers/auth`);
const { auth } = require(`${basedir}/middleware`);

const router = express.Router();

router.post("/signup", ctrlWrapper(signUp));
router.post("/", ctrlWrapper(logIn));
router.get("/", auth, ctrlWrapper(logOut));
router.get("/validate", auth, validate);

module.exports = router;
