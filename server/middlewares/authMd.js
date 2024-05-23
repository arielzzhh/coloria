import { verifyToken } from "../token/jwt.js";


const authMd = async (req, res, next) => {


    try {
        if (!req.headers["x-auth-token"]) throw new Error("token not found");
        const payload = await verifyToken(req.headers["x-auth-token"]);
        req.userData = payload;
        log(payload);
        next();
      }



      catch (err) {
        console.log(err.message);

      }




}


export default authMd