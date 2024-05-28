import { Stack } from "@mui/material";
import bank from "../../Script/Bank/bank";
import CVector from "../../Components/Items/colorVectors/CVector";
import BImage from "../../Components/Bulb/Images/BImage";

export function OneBoeard ({elment}){



    return(<Stack direction={'row'} justifyContent={'space-evenly'}>
  <div>
{elment.Date[0]}/
{elment.Date[1]}

  </div  >


  
  <Stack direction={'row'} justifyContent={'space-evenly'} >
  {elment.bank.map((elment,index)=>(
    <CVector color={bank.NumberBank(index)} amount={elment}></CVector>

  ))}
  </Stack>

  <div>
  {elment.roster.map((elment,index)=>(
    <BImage W={100} bulb={elment[0]}></BImage>
  ))}
  </div>
 
     <br />
    </Stack>)
}


export default OneBoeard ;