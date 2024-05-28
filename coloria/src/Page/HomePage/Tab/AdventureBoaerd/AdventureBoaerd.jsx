import Adventure from "../../../../Components/adventure/Adventure";
import { Grid, Stack } from "@mui/material";
import { currentData} from "../../../../Script/Data/Data";
import { useState,useContext } from "react";
import { UserContext } from "../../../../Router/Routing";

export function AdventureBoaerd ({setTabiName}){
    const { data, update } = useContext(UserContext);

   
    return(<Stack direction={'row'}>



    <Grid container>
      
       <Grid style={{backgroundColor:'silver'}} item xs={12}>Main Adventures</Grid> 


    { data.adventureData.adventureSearisActive.map((elment,index)=>( <Grid   style={{border:'black 2px solid',fontSize:'0.6em',backgroundColor:'rgba(128,255,255,0.2)'}}  item key={index} xs={2}> 
    <Adventure update={update} index={index}   setTabiName={setTabiName} adv={elment.current()[0]}></Adventure> 
    <p style={{fontSize:'1.6em'}}>{elment.name}</p>

       </Grid>))}






       
       { data.adventureData.standByAdventures.map((elment,index)=>( <Grid item key={index} xs={2}> 
    <Adventure update={update} index={index}   setTabiName={setTabiName} adv={elment}></Adventure> 
       </Grid>))}






     </Grid>












</Stack>)
}


export default AdventureBoaerd;