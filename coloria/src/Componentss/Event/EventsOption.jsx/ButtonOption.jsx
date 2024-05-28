import { Button } from "@mui/material"
import GainBulb from "./GainBulb"
import StartSerias from "./StartSerias"


export function ButtonOption ({elment,EventMsg,update}){







switch (true){
    case elment[0]=='gain Bulb':
        return (<>
        <GainBulb update={update} EventMsg={EventMsg} elment={elment}></GainBulb>
        </>)
      case elment=='ok':
        return (
       <Button variant="contained" onClick={()=>{EventMsg.passOne();update()}} >ok</Button>
       )



    case (elment[0].constructor.name=='AdventureSeries'&&elment[1]=='Start'):
      return (
  <>
  <StartSerias update={update} EventMsg={EventMsg} elment={elment} variant="contained">Start</StartSerias>
  </>

      )
  
    
}





}


export default ButtonOption