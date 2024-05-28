import Joi from "joi";

const  nameVaildation =Joi.object({
    name: Joi.string().min(2).max(256).required(),
})

const emailVaildation = Joi.object({
    email: Joi.string().min(2).max(256) .required(),
  });

const passworVaildation = Joi.object({
    password: Joi.string()
      .pattern(new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!@#$%^&*()-])[A-Za-z\\d!@#$%^&*()-]{9,}$'))
      .min(9)
      .max(20)
      .required(),
  });




  const validateFirstSchema = (name) => nameVaildation.validate(name);
  const validateemailSchema = (email) => emailVaildation.validate(email);
  const validapasswordScheme = (password) => passworVaildation.validate(password);



  
const validateRegisterSchema = {
    name: validateFirstSchema,
    email: validateemailSchema,
    password: validapasswordScheme,
 
  
  };
  


  export {validateRegisterSchema};