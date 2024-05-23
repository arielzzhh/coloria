import express from 'express'
import {registerController,loginController}   from '../../controllers/usercontrollers.js'
import bodyValidationMiddleware from '../../middlewares/bodyValidation.js'
import registerValid from '../../validation/validation.js';





const userRouter = express.Router();
//http://localhost:8000/users
userRouter.get("/", (req, res) => {
    res.json("you are in user Managment");
  });

//http://localhost:8000/users/register
  userRouter.post("/register" ,bodyValidationMiddleware(registerValid), registerController)

  //http://localhost:8000/users/login
  userRouter.post("/login" , loginController)


  









export default userRouter