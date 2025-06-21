import joi from "joi";

const movieAddSchema = joi.object({
  title: joi.string().required(),
  director: joi.string().required(),
  favorite: joi.boolean().required(),
  releaseYear: joi.string(),
  genre: joi
    .string()
    .valid("Action", "Comedy", "Drama", "Horror", "Sci-Fi")
    .required(),
});

const movieUpdateSchema = joi.object({
  title: joi.string(),
  director: joi.string(),
  favorite: joi.boolean(),
  releaseYear: joi.string(),
  genre: joi.string().valid("Action", "Comedy", "Drama", "Horror", "Sci-Fi"),
});

const movieUpdateFavoriteSchema = joi.object({
  favorite: joi.boolean().required(),
});

export { movieAddSchema, movieUpdateSchema, movieUpdateFavoriteSchema };
