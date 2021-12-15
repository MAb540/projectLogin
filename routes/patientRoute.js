import express from "express";
import { getParams, getPatients } from "../controllers/patients.js";


const patientRoute = express.Router();


patientRoute.get('/',getPatients);
patientRoute.get('/:email&:date',getParams);

export default patientRoute;