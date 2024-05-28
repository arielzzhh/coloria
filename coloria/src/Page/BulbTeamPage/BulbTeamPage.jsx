import { useState } from "react";
import { currentData } from "../../Script/Data/Data";
import BulbMenuBar from "../../Components/Bulb/BulbMenuBar";
import { Stack } from "@mui/material";


export function BulbTeamPage (){
const [team,setData]= useState(currentData.Team)

    return(<Stack direction={'row'} justifyContent={'space-evenly'} >

    {team.map((element,key)=>(  <BulbMenuBar bulb={element} key={key} >   </BulbMenuBar>))}
    
    
    
    </Stack>)
}



export default BulbTeamPage;