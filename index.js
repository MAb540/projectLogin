import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

import "./db/connectDB.js";

import itemsRouter from "./routes/api_items.js";
import usersRoute from './routes/usersRoute.js';
import coachesRoute from './routes/coachesRoute.js';
import allRoutes from './routes/coachesRoute.js';
import patientRoute from "./routes/patientRoute.js";


const app = express();

//logger
app.use(morgan("dev"));

// bodyparser middleware
app.use(express.json());

app.use(cors());

app.use(express.static("build"));


// routes
// app.use(allRoutes);
app.use("/items-api", itemsRouter);
app.use('/users',usersRoute);
app.use('/coaches',coachesRoute);
app.use('/patient',patientRoute);



app.get('/',(req, res) => {
  res.send('working');
})





app.listen(process.env.PORT || 5000, () =>
  console.log("listening on port", 5000)
);
