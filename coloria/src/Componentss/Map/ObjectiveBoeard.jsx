import { currentData } from "../../Script/Data/Data"
import Objective from "./Objective"



export function ObjectiveBoeard ({data}){   //use only for the adventure


    return(<div  > 

{data.adventure.objectives.map((elment, index)=>(
<Objective elment={elment} index={index}></Objective>

))}

    </div>)
}


export default ObjectiveBoeard