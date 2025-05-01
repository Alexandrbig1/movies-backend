import express from "express";
import isEmptyBody from "../middleware/isEmptyBody.js";
import moviesControllers from "../controllers/moviesControllers.js";
import validateBody from "../decorators/validateBody.js";
import {
  movieAddSchema,
  movieUpdateSchema,
} from "../schemas/moviesSchemas.js ";

const moviesRouter = express.Router();

moviesRouter.get("/", moviesControllers.getAllMovies);

moviesRouter.get("/:id", moviesControllers.getMovieById);

moviesRouter.post(
  "/",
  isEmptyBody,
  validateBody(movieAddSchema),
  moviesControllers.createNewMovie
);

// moviesRouter.put(
//   "/:id",
//   isEmptyBody,
//   validateBody(movieUpdateSchema),
//   moviesControllers.updateById
// );

// moviesRouter.delete("/:id", moviesControllers.deleteMovie);

export default moviesRouter;
