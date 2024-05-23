import Joi from "joi";



const registerScheme = Joi.object({
    name: Joi.string().min(7).max(20).required(),
    email:Joi.string().min(7).max(20).required(),
    password:Joi.string().min(7).max(20).required(),

})




const registerSchemeVaildation = (info)=>{
    return registerScheme.validateAsync(info);
}


export default  registerSchemeVaildation