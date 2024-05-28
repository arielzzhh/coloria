import { currentData } from "../../../../Script/Data/Data"
import { Button, Stack, ButtonGroup, Typography} from "@mui/material"
import InboxSmallMsg from "./InboxSmallMsg"
import InboxMsg from "./InboxMsg"
import { useState } from "react"
export function Inbox ({onClick}){
    const [Index,setIndex] =useState(0)




if (currentData.Inbox.length>0){

    return (<div ><Stack direction={'row'} >
    {currentData.Inbox.map((elment,index)=>(
        <InboxSmallMsg onClick={()=>{ elment.Read=true;setIndex(index); }} elment={elment} key={index}></InboxSmallMsg>
    ))}
    
    </Stack>
    <div style={{backgroundColor:'green'}}>
    <InboxMsg Index={Index}></InboxMsg>

    </div>
    
    </div>)
}

}



export default Inbox