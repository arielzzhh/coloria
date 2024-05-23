import { User } from "./user.js";
import mongoose from "mongoose";
import connectToMongo from "../dbConnect.js";

 const createUser = async (data) => {
  connectToMongo()
  let newUser = new User(data);
  return await newUser.save();
};



const getUserByEmail =(email)=>{
  connectToMongo()
  return User.findOne({email});

}









export default createUser


export {getUserByEmail}