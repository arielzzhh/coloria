import { Button,Grid, Stack, Typography } from "@mui/material";
import {Data,currentData} from "../../Script/Data/Data";
import  EvemtComp  from "../../Components/Map/EventComp";
import BulbTeamBar from "../../Components/Battle/BulbTeamBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Backpack } from "lucide-react";
import { Swords } from "lucide-react";







export function MapPage (){

const naviagor =useNavigate()





function  showBattle(){
    if(currentData.battle.Enemy!==null){
      return 'block'
  
    }
  return 'none'
  }
  
  


    return(<Stack direction={'row'} >
        



<Stack  style={{width:'20%'}}>  
<Button  style={{ textTransform: 'lowercase',display:showBattle() }}  onClick={()=>{naviagor('/battle')}}  variant="contained"> <Swords />return to battle</Button>

<Button disabled={currentData.inventory.length==0} style={{ textTransform: 'lowercase' }}  onClick={()=>{naviagor('/Inventory')}}  variant="contained"> <Backpack />backPack </Button>
<Button  disabled={currentData.roster.length==0} style={{ textTransform: 'lowercase' }} onClick={()=>{ naviagor('/bulb')}} variant="contained">Roster</Button>
<BulbTeamBar titles={'roster'}  Team={currentData.Team}></BulbTeamBar>
</Stack>


<Stack style={{width:'95%'}}>


<EvemtComp currentData={currentData}></EvemtComp>


</Stack>

    
    
    </Stack>


    
    
    )
}


export default MapPage;