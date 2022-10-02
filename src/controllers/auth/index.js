const signUp = require("./signup");
const logIn = require("./login");
const logOut = require("./logout");
const validate = require("./validate");
const activate = require("./activate");

module.exports = {
  activate,
  validate,
  logOut,
  logIn,
  signUp,
};
