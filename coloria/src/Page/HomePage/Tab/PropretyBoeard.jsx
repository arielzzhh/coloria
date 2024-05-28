import { currentData,adventureData } from "../../../Script/Data/Data"
import PropretyPreview from "./Settelement/PropretyPreview"
import {Grid,Button} from "@mui/material";

export function PropretyBoeard ({onclick,setTabiName,setpropretyVied}){


return(<>

<Grid container>

{ currentData.proprety.map((elment,key)=>{
return  <Grid key={key} item xs={2}> <PropretyPreview  onclick={()=>{;currentData.adventureData.nextWatch=key;setTabiName('Proprety');setpropretyVied(key)}}  elment={elment.proprety} ></PropretyPreview>     </Grid> })


    

    

}
</Grid>
</>)

    


   
}


export default PropretyBoeard