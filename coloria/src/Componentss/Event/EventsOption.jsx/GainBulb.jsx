
import { Button } from "@mui/material"
import roster from "../../../Script/Handaling/roster";
import BImage from "../../Bulb/Images/BImage";
export function GainBulb ({elment,EventMsg,update}){






    function  gainTheBulb(){
     elment[1].forEach(element => {
    roster.gainBulb(element)
     });

    }



    return(<>
    <p style={{color:'grey'}}>You recivedBulb </p>

   {elment[1].map((elment,index)=>(
    <BImage state={0} W={250} bulb={elment}></BImage>
   ))}

<br />
    <Button onClick={()=>{EventMsg.passOne();gainTheBulb();update()}} variant="contained">{elment[0]}</Button>

    
    </>)
}


export default GainBulb