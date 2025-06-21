import express from "express";
import { isEmptyBody, isValidId } from "../middleware/index.js";
import moviesControllers from "../controllers/moviesControllers.js";
import validateBody from "../decorators/validateBody.js";
import {
  movieAddSchema,
  movieUpdateSchema,
  movieUpdateFavoriteSchema,
} from "../schemas/moviesSchemas.js ";

const moviesRouter = express.Router();

moviesRouter.get("/", moviesControllers.getAllMovies);

moviesRouter.get("/:id", isValidId, moviesControllers.getMovieById);

moviesRouter.post(
  "/",
  isEmptyBody,
  validateBody(movieAddSchema),
  moviesControllers.createNewMovie
);

moviesRouter.put(
  "/:id",
  isValidId,
  isEmptyBody,
  validateBody(movieUpdateSchema),
  moviesControllers.updateById
);

moviesRouter.patch(
  "/:id/favorite",
  isValidId,
  isEmptyBody,
  validateBody(movieUpdateFavoriteSchema),
  moviesControllers.updateById
);

moviesRouter.delete("/:id", moviesControllers.deleteMovie);

export default moviesRouter;
