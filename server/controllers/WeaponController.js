import createGear from "../models/mongo/item/gearService.js";


async function WeaponRegisterController (req,res){


    try {

        let newUser = await createGear(req.body);
      } catch (err) {
        console.log(req.body);
        
      }
    };
  





export { WeaponRegisterController}