import HttpError from "../helpers/HttpError.js";

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(HttpError(400, "Missing required fields"));
    }
    next();
  };

  return func;
};

export default validateBody;
