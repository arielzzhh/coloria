import createUser from "./mongo/user/userService.js";


const Db ="mongo"



export const connectToDb = () => {
    if (Db === "mongo") {
      return connectToMongo();
    }
    if (Db === "mysql") {
      return connectToMySQL();
    }
  };

const AddUser =(user)=>{

  if (Db === "mongo") {
    return createUser(user);
  }
}


const FindSelfPoint =(user)=>{

  if (Db === "mongo") {
    return findAllMyDataPoints(user);
  }
}









