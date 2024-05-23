import express from 'express'
import bulb from '../../models/mongo/bulb/bulb.js';
import { CreateBulb } from '../../models/mongo/bulb/bulbService.js';
import bulbRegisterController from '../../controllers/bulbcontrollers.js';



const bulbRouter =express.Router();




//http://localhost:8000/bulb
bulbRouter.get('/', (req, res) => {
    res.json("you are in bulb typed request ");
  })



//http://localhost:8000/bulb/create

  bulbRouter.get('/create',bulbRegisterController)











export default bulbRouter