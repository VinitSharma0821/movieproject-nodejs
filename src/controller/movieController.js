const mongoose = require("mongoose");
const Movie = require("../models/movieModel");

exports.addMovie = async (req, res) => {
  try {
    const {
      title,
      director,
      genre,
      releaseYear,
      language,
      duration,
      description,
    } = req.body;

    if (
      !title ||
      !director ||
      !genre ||
      releaseYear === undefined ||
      !language ||
      duration === undefined ||
      !description
    ) {
      return res.status(400).json({ message: "All files are requires" });
    }

    const newMovie = await Movie.create({
      title,
      director,
      genre,
      releaseYear,
      language,
      duration,
      description,
    });

    return res
      .status(201)
      .json({ message: "Movie addes successfully", newMovie });
  } catch (error) {
    console.error("Error", error);
    return res.status(500).json({ message: "Error While adding Movie" });
  }
};

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();

    return res
      .status(200)
      .json({ message: "Movies fetched successfully", movies });
  } catch (error) {
    console.error("Error", error);

    return res.status(500).json({ message: "Error While fetching Movies" });
  }
};

exports.getMovies = async (req, res) => {
  try {
    const id = req.params.id;

    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    return res
      .status(200)
      .json({ message: "Movie fetched successfully", movie });
  } catch (error) {
    console.error("Error", error);

    return res.status(500).json({ message: "Movie load failed" });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const id = req.params.id;

    const {
      title,
      director,
      genre,
      releaseYear,
      language,
      duration,
      description,
    } = req.body;

    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    movie.title = title;
    movie.director = director;
    movie.genre = genre;
    movie.releaseYear = releaseYear;
    movie.language = language;
    movie.duration = duration;
    movie.description = description;

    await movie.save();

    return res
      .status(200)
      .json({ message: "Movie update successfully", movie });
  } catch (error) {
    console.error("Error", error);
    return res.status(500).json({ message: "Movie update failed" });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const id = req.params.id;

    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    await Movie.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ message: "Movie delete successfully" }, movie);
  } catch (error) {
    console.error("Error", error);
    return res.status(500).json({ message: "Movie delete successfully" });
  }
};
