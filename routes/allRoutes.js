import express from "express";
import usersRoute from "./usersRoute.js";


const allRoutes = express.Router();

allRoutes.get('/',(req, res)=>{
    res.send('frm')
});




export default allRoutes;