const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },

    director: {
      type: String,
      required: [true, "Director is required"],
    },

    genre: {
      type: String,
      required: [true, "Genre is required"],
    },

    releaseYear: {
      type: Number,
      required: [true, "Release year is required"],
    },

    language: {
      type: String,
      required: [true, "Language is required"],
    },

    duration: {
      type: Number,
      required: [true, "Duration is required"],
    },

    description: {
      type: String,
      required: [true, "Description is required"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Movie", movieSchema);
