const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

global.basedir = __dirname;

const userRouter = require("./routes/user/auth");
const movieRouter = require("./routes/movie/movie");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Start" });
});

app.use("/user", userRouter);
app.use("/movie", movieRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not fount" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
