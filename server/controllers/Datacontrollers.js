
import connectToMongo from "../models/mongo/dbConnect.js";
import { createDataPoint,getAlldataInfo ,getMyInfo} from '../models/mongo/Data/DataService.js';


async function DataRegisterController(req, res) {
  try {
    let newUserData = await createDataPoint(req.body);
    res.status(201).json(newUserData); // Send a success response with the created data
  } catch (err) {
    console.error('Error creating data point:', err);
    res.status(500).json({ error: 'Failed to create data point' }); // Send an error response
  }
}



async function getAllData(req, res) {
  try {
    const data = await getAlldataInfo();
    res.status(200).json(data); // Send a success response with the retrieved data
  } catch (err) {
    console.error('Failed in controller:', err);
    res.status(500).json({ error: 'Failed to retrieve data' }); // Send an error response
  }
}


async function getmyData(req, res) {
  try {
    console.log(req.headers.authorization)
    const data = await getMyInfo(req.headers.authorization);
    res.status(200).json(data); // Send a success response with the retrieved data
  } catch (err) {
    console.error('Failed in controller:', err);
    res.status(500).json({ error: 'Failed to retrieve data' }); // Send an error response
  }
}

export { DataRegisterController, getAllData ,getmyData};