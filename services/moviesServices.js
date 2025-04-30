import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const moviesPath = path.resolve("db/movies.json");

const updateMovies = (movies) =>
  fs.writeFile(moviesPath, JSON.stringify(movies, null, 2));

export const getAllMovies = async () => {
  const moviesData = await fs.readFile(moviesPath, "utf-8");
  return JSON.parse(moviesData);
};

export const getMovieById = async (id) => {
  const moviesData = await getAllMovies();
  const movie = moviesData.find((movie) => movie.id === id);

  return movie || null;
};

export const createNewMovie = async (data) => {
  const moviesData = await getAllMovies();
  const newMovie = {
    id: nanoid(),
    ...data,
  };
  moviesData.push(newMovie);
  await updateMovies(moviesData);
  return newMovie;
};

export const updateMovie = async (id, data) => {
  const moviesData = await getAllMovies();
  const index = moviesData.findIndex((movie) => movie.id === id);

  if (index === -1) {
    return null;
  }

  moviesData[index] = { ...moviesData[index], ...data };
  await updateMovies(moviesData);
  return moviesData[index];
};

export const deleteMovie = async (id) => {
  try {
    const moviesData = await getAllMovies();
    const index = moviesData.findIndex((movie) => movie.id === id);
    if (index === -1) {
      return null;
    }
    const [deletedMovie] = moviesData.splice(index, 1);
    await updateMovies(moviesData);
    return deletedMovie;
  } catch (error) {
    console.error("Error deleting movie:", error);
  }
};
