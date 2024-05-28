import { Stack } from "@mui/material"
import BImage from "./Images/BImage"
import { yellow } from "@mui/material/colors"

export function RosterBulb({element,onClick,bulbIndex}){


    function coloredType (){
        if(element.available){
            return 'rgba(75,75,75,0.25)'
        }

        else{
        return 'rgba(75,75,75,1)'
        }

    }


    return(
    <div   style={{backgroundColor: coloredType() , border:'black solid 2px'} } >
    <BImage  viewB="0 0 200 100" onClick={onClick} bulb={element} W={'100%'} state={1} ></BImage>

    </div>

    
    )
}


export default RosterBulb