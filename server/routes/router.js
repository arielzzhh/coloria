import express from 'express'
import userRouter from './routing/user.js';
import { connectToDb } from '../models/Adapter.js';
import ItemRouter from './routing/weapon.js';
import DataPointRouter from './routing/DataPoint.js';
import bulbRouter from './routing/bulb.js';
const router =express.Router()


router.get("/", (req, res) => {
  res.json("users sub rodsadasdute");
});





//http://localhost:8000/users
router.use("/users",userRouter)



//http://localhost:8000/weapons
router.use("/weapons",ItemRouter)


//http://localhost:8000/data
router.use("/data",DataPointRouter)



router.use("/bulb",bulbRouter)










export default router