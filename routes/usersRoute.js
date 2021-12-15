import express from "express";


const usersRoute = express.Router();


usersRoute.get('/', (req, res) => {
    res.send('users route working fine.');
});


usersRoute.post('/schedule-notification', (req, res) => {
    
    const {time,date} = req.body;
    res.status(200).json({time,date});
});


export default usersRoute;
