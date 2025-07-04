import express from "express";
import cors from "cors";
import "dotenv/config";
import moviesRouter from "./routes/moviesRouter.js";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

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
  res.status(404).json({ message: "Page not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Internal Server Error" } = err;
  res.status(status).json({
    message,
  });
});

export default app;
