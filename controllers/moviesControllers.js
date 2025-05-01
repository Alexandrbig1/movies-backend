import Movie from "../models/Movie.js";

import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

const getAllMovies = async (req, res) => {
  const moviesData = await Movie.find();

  res.json(moviesData);
};

const getMovieById = async (req, res) => {
  const { id } = req.params;

  const movieById = await Movie.findById(id);

  if (!movieById) {
    throw HttpError(404, "Movie not found");
  }

  res.json(movieById);
};

const createNewMovie = async (req, res) => {
  const newMovie = req.body;
  console.log(newMovie);

  const createNewMovie = await Movie.create(newMovie);

  res.status(201).json(createNewMovie);
};

// const updateById = async (req, res) => {
//   const newMovie = req.body;
//   const { id } = req.params;

//   const updateMovie = await moviesServices.updateMovie(id, newMovie);

//   if (!updateMovie) {
//     throw HttpError(404, "Movie not found");
//   }

//   res.json(updateMovie);
// };

// const deleteMovie = async (req, res) => {
//   const { id } = req.params;
//   const deletedMovie = await moviesServices.deleteMovie(id);
//   if (!deletedMovie) {
//     throw HttpError(404, "Movie not found");
//   }
//   res.json({
//     message: "Movie deleted",
//   });
// };

export default {
  getAllMovies: ctrlWrapper(getAllMovies),
  getMovieById: ctrlWrapper(getMovieById),
  createNewMovie: ctrlWrapper(createNewMovie),
  // updateById: ctrlWrapper(updateById),
  // deleteMovie: ctrlWrapper(deleteMovie),
};
