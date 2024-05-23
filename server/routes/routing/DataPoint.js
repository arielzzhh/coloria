import express from 'express'
import DataRegisterController from '../../controllers/Datacontrollers.js';
import authMd from '../../middlewares/authMd.js';


const DataPointRouter = express.Router();
//http://localhost:8000/data
DataPointRouter.get("/", (req, res) => {
    res.json("you are in data Managment");
  });

//http://localhost:8000/data/register
  DataPointRouter.post('/register', authMd,   DataRegisterController)








  export default DataPointRouter