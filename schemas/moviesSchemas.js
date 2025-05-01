import joi from "joi";

const movieAddSchema = joi.object({
  title: joi.string().required(),
  director: joi.string().required(),
  releaseYear: joi.string(),
  genre: joi
    .string()
    .valid("Action", "Comedy", "Drama", "Horror", "Sci-Fi")
    .required(),
});

const movieUpdateSchema = joi.object({
  title: joi.string(),
  director: joi.string(),
});

export { movieAddSchema, movieUpdateSchema };
