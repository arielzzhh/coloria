import createUser from "../models/mongo/user/userService.js";
import { generateHash,cmpHash} from "../utils/bcrypt.js";
import { generateToken } from "../token/jwt.js";
import {getUserByEmail} from '../models/mongo/user/userService.js'



const registerController = async (req, res) => {

    try {
      console.log(req.body.email)
      let userFromDB = await getUserByEmail(req.body.email);
      if (userFromDB) throw new Error("user already exists");
      let passwordHash = await generateHash(req.body.password);
      req.body.password = passwordHash;
   
      let newUser = await createUser(req.body);
      newUser.password = undefined;
      delete newUser.password; 
      res.json(req.body);    //this is the text send in the response no need to change it isent matter
    } catch (err) {
      console.log('register faild');
      console.log(err);

    }
  };

  const loginController =   async (req,res)=>{

try {   
  let userFromDB = await getUserByEmail(req.body.email);
  if (!userFromDB) throw new Error("invalid email or password");
  let passwordMatch = await cmpHash(req.body.password, userFromDB.password);
  if (!passwordMatch) throw new Error("invalid email or password");
  let token = await generateToken({
    _id: userFromDB._id,
    
  });
  res.json(token);





}

catch(error){
  console.log(error);

}



  }



  export {registerController,loginController} 