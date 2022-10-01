const express = require("express");
const { basedir } = global;

const { ctrlWrapper } = require(`${basedir}/helpers`);
const {
  add,
  getQueue,
  getWatched,
  deleteQueue,
  deleteWatched,
} = require(`${basedir}/controllers/movie`);
const { auth } = require(`${basedir}/middleware`);

const router = express.Router();

router.post("/", auth, ctrlWrapper(add));
router.get("/queue/:language", auth, ctrlWrapper(getQueue));
router.get("/watched/:language", auth, ctrlWrapper(getWatched));
router.delete("/queue/:id", auth, ctrlWrapper(deleteQueue));
router.delete("/watched/:id", auth, ctrlWrapper(deleteWatched));

module.exports = router;
