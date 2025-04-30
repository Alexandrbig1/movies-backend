import joi from "joi";

const movieAddSchema = joi.object({
  title: joi.string().required(),
  director: joi.string().required(),
});

const movieUpdateSchema = joi.object({
  title: joi.string(),
  director: joi.string(),
});

export { movieAddSchema, movieUpdateSchema };
