import * as moviesServices from "../services/moviesServices.js";

import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

const getAllMovies = async (req, res) => {
  const moviesData = await moviesServices.getAllMovies();

  res.json(moviesData);
};

const getMovieById = async (req, res) => {
  const { id } = req.params;
  const movieById = await moviesServices.getMovieById(id);

  if (!movieById) {
    throw HttpError(404, "Movie not found");
  }

  res.json(movieById);
};

const createNewMovie = async (req, res) => {
  const newMovie = req.body;

  const createNewMovie = await moviesServices.createNewMovie(newMovie);

  res.status(201).json(createNewMovie);
};

const updateById = async (req, res) => {
  const newMovie = req.body;
  const { id } = req.params;

  const updateMovie = await moviesServices.updateMovie(id, newMovie);

  if (!updateMovie) {
    throw HttpError(404, "Movie not found");
  }

  res.json(updateMovie);
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  const deletedMovie = await moviesServices.deleteMovie(id);
  if (!deletedMovie) {
    throw HttpError(404, "Movie not found");
  }
  res.json({
    message: "Movie deleted",
  });
};

export default {
  getAllMovies: ctrlWrapper(getAllMovies),
  getMovieById: ctrlWrapper(getMovieById),
  createNewMovie: ctrlWrapper(createNewMovie),
  updateById: ctrlWrapper(updateById),
  deleteMovie: ctrlWrapper(deleteMovie),
};
