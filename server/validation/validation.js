import registerSchemeVaildation from "./joi.js/user/register.js";

const validation = "joi"

function validationError (){
      throw new Error(`Validation ${validation} is not supported`);
 
}





const registerValid =(input)=>{
    if(validation==='joi'){
     return registerSchemeVaildation(input)
    }
    else  validationError()
}


export default registerValid