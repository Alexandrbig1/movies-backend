import { Schema, model } from "mongoose";
import { handleSaveError } from "./hooks.js";

const movieSchema = new Schema(
  {
    title: String,
    director: String,
    releaseYear: {
      type: String,
      validate: {
        validator: function (v) {
          return /^\d{4}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid year!`,
      },
    },
    genre: {
      type: String,
      enum: ["Action", "Comedy", "Drama", "Horror", "Sci-Fi"],
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

movieSchema.post("save", handleSaveError);

const Movie = model("Movie", movieSchema);

export default Movie;
