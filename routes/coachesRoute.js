import express from "express";
import {getCoaches,createCoach,deleteCoach} from '../controllers/coaches.js';

const coachesRoute = express.Router();


coachesRoute.get('/',getCoaches);
coachesRoute.post('/',createCoach)

coachesRoute.delete('/',deleteCoach);


export default coachesRoute;