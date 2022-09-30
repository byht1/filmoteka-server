const add = require("./add");
const getQueue = require("./getQueue");
const getWatched = require("./getWatched");
const deleteQueue = require("./deleteQueue");
const deleteWatched = require("./deleteWatched");

module.exports = {
  deleteWatched,
  deleteQueue,
  getWatched,
  getQueue,
  add,
};
