import BattleLogMsg from "./BattleLogMsg";
import { currentData } from "../../../Script/Data/Data";
import { useState } from "react";
import { Stack } from "@mui/material";


export function BattleLog (){
    const [data,setData]=useState(currentData.battle.battleLog)


    return(<Stack style={{overflowY: 'auto',height:'150px' ,backgroundColor:'rgba(126,200,62,0.88)' }} direction={'column'} justifyContent={'center'}>
    
    
    {data.map((elment,index)=>( <BattleLogMsg index={index}  elment={elment} key={index}>  </BattleLogMsg>   ))}
    
    
    
    </Stack>)


}



export default BattleLog;