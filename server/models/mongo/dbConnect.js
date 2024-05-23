import mongoose from "mongoose";

const connectToMongo = ()  => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect('mongodb://localhost:27017/coloria')
      .then(() => {
        console.log("Connected to MongoDB");
        resolve();
      })
      .catch((err) => {
        console.log("Error connecting to MongoDB: ", err);
        reject(err);
        process.exit(1); //drop the server
      });
  });
};

export default connectToMongo;




