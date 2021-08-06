import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

import "./db/connectDB.js";

import authRouter from "./routes/api.js";

const app = express();

//logger
app.use(morgan("dev"));

// bodyparser middleware
app.use(express.json());

app.use(cors());

// routes
app.use("/api", authRouter);

app.use(express.static("build"));

app.listen(process.env.PORT || 5000, () =>
  console.log("listening on port", 5000)
);
