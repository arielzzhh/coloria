import express from 'express';
import router from './routes/router.js';
import http from 'http';
import cors from 'cors'
import createGear from './models/mongo/item/gearService.js' 
import {createDataPoint} from './models/mongo/Data/DataService.js';
import dotenv  from "dotenv";
import connectToMongo from './models/mongo/dbConnect.js';
dotenv.config();

const port =8000;
let app =express();

const server =http.createServer(app)
connectToMongo();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use(cors());
app.use(express.json());


app.use("/",router)

