import express from 'express'
import authMd from '../../middlewares/authMd.js';
import { DataRegisterController ,getAllData,getmyData} from '../../controllers/Datacontrollers.js';


const DataPointRouter = express.Router();


//http://localhost:8000/data/


DataPointRouter.get('/' ,getmyData )



//http://localhost:8000/data/all
DataPointRouter.get('/all' ,getAllData )


//http://localhost:8000/data/register
  DataPointRouter.post('/register', authMd,   DataRegisterController)

  










  export default DataPointRouter