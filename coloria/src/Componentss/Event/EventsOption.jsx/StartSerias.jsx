import { Button } from "@mui/material";
import adventureIo from "../../../Script/adventures/adventureIo";



export function StartSerias ({elment,EventMsg,update}){

    return(<>
    <Button onClick={()=>{EventMsg.passOne(); adventureIo.gainAdventureSerias(elment[0])  ;update();


    }} variant="contained">{elment[0].name} </Button>
    
    </>)
}



export default StartSerias ;