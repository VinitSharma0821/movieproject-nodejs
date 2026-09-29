const express = require("express");

const {
  addMovie,
  getAllMovies,
  getMovies,
  updateMovie,
  deleteMovie,
} = require("../controller/movieController");

const router = express.Router();

router.get("/", getAllMovies);

router.post("/", addMovie);

router.get("/:id", getMovies);

router.put("/:id", updateMovie);

router.delete("/:id", deleteMovie);

module.exports = router;
