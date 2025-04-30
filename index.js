import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import moviesRouter from "./routes/moviesRouter.js";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/movies", moviesRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Internal Server Error" } = err;
  res.status(status).json({
    message,
  });
});

export default app;
