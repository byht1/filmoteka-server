const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    poster_path: {
      type: String,
      required: true,
    },
    genre_ids: { type: [Number], require: true },
    title: {
      type: String,
      required: true,
    },
    vote_average: {
      type: Number,
      required: true,
    },
    library: {
      type: String,
      enum: ["queue", "watched"],
      default: "queue",
    },
    language: {
      type: String,
      enum: ["uk-UA", "en-US"],
      default: "en-US",
    },
    release_date: {
      type: String,
    }
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const Movie = model("movie", movieSchema);

module.exports = {
  Movie,
};
