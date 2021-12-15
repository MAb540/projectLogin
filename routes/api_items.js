import express from "express";

import Item from '../models/item.js';

import Line from '../models/line.js';

const itemsRouter = express.Router();

itemsRouter.get('/items',async (req, res) => {

    const Items = await Item.find({}).select('-__v').lean();
    // res.send(Items);

    let ids_arr = []

    Items.forEach(item => {
        ids_arr.push(item._id);
    })

    const lines = await Line.find({item:{$in:ids_arr}}).select('-_id -item -__v').lean();
    let all_data = [];
    for(let i=0; i<Items.length; i++) {
        let new_obj = {...Items[i],...lines[i]}
        all_data.push(new_obj);
    }
    
    res.send(all_data);


})

itemsRouter.post('/items',async (req, res) => {

    const itemsData = [
    { name:'Mobile',
      description:'This is a great mobile to have',
      price: 25  
    },
    { name:'Speakers',
      description:'These are great speakers to have',
      price: 10  
  },
    { name:'wireless Keyboard',
       description:'This is a great keyboard to have',
        price: 16  
    }
    ];

    const Items = await Item.insertMany(itemsData);
    res.send(Items);
});

itemsRouter.get('/lines',async (req, res)=>{
    const lines = await Line.find({})
    .select('-createdAt -updatedAt -__v -_id')
    .lean()
    .populate({path:'item',select:'-createdAt -updatedAt -__v'})

 
    let new_lines = lines.map(line =>{
        let new_line = {...line['item'],quantity:line['quantity']};
        return new_line
    })
    res.send(new_lines);
})

itemsRouter.post('/lines',async (req, res)=>{

    const LinesData = [
        { 
            item: '6196031feb82cb11bc84fa45',
            quantity: 10  
        },
        { 
            item: '6196031feb82cb11bc84fa46',
            quantity: 15  
        }
        ]; 

    const lines = await Line.insertMany(LinesData);

   res.status(200).json({
       value:{
           description:'Get items Success example',
           lines:lines
       }
   })     


})





export default itemsRouter;
