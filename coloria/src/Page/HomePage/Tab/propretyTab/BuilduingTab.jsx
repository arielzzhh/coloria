import { Stack,Button } from "@mui/material"
import { currentData } from "../../../../Script/Data/Data"
import { useState } from "react";
import BuilduingInfo from "../../../../Components/settelements/BuilduingInfo";
import BuilduingUpgrade from "../../../../Components/settelements/BuilduingTypes/BuilduingUpgrade";
import NewBuilduingTab from './NewBuilduing'
export function BuilduingTab ({update}){

    const [builduingShow,setBuilduingShow] =useState(0);
    const [newBuilduing,setNewBuilduing]=useState(false)

    return(<>
    
    
    <Stack direction={'row'} justifyContent={'space-evenly'}>





    <Stack>
       <NewBuilduingTab proprety={currentData.proprety[currentData.pick.Proprety].proprety}></NewBuilduingTab>


   </Stack>


     






   <Stack style={{backgroundColor:'silver',border:'brown 2px solid'}}>
<p style={{fontSize:'1.5em',fontWeight:'1000',backgroundColor:'cyan',border:'brown 2px solid'}}>Builduings</p>
{currentData.proprety[currentData.pick.Proprety].proprety.Builduings.map((elment,index)=>(
(<>
<Button key={index} onClick={()=>{setBuilduingShow(index)}} fullWidth variant="contained">{elment.name}/{elment.lvl}</Button>
</>
)
))}

   </Stack>










   <Stack>
<BuilduingInfo proprety={currentData.proprety[currentData.pick.Proprety].proprety} builduing={builduingShow}></BuilduingInfo>
<BuilduingUpgrade  proprety={currentData.proprety[currentData.pick.Proprety].proprety} builduing={builduingShow}></BuilduingUpgrade>
   </Stack>







        </Stack>
    
    
    
    </>)
}



export default BuilduingTab