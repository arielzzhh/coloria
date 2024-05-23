import express from 'express'
import { WeaponRegisterController } from '../../controllers/WeaponController.js';




const ItemRouter =express.Router()

//http://localhost:8000/weapons
ItemRouter.get("/", (req, res) => {
    res.json("you are in weapon Managment");
  });
//http://localhost:8000/weapons/register
  ItemRouter.get('/register',WeaponRegisterController)





  export default ItemRouter;