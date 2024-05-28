import { Stack } from "@mui/material"
import { currentData } from "../../../../Script/Data/Data"
import roster from "../../../../Script/Handaling/roster"
import BImage from "../../../../Components/Bulb/Images/BImage"







export function RosterTab ({update}){


    function moveToProprety(index){
        if(currentData.proprety[currentData.pick.Proprety].proprety.resident.length<currentData.proprety[currentData.pick.Proprety].proprety.maxAmountBulb()){
            currentData.proprety[currentData.pick.Proprety].proprety.resident.push(currentData.roster[index])
            currentData.roster.splice(index,1)
            update();
        }
    }
    
    function moveToRoster(index){
        if((currentData.roster.length<roster.maxRoster())&&currentData.proprety[currentData.pick.Proprety].proprety.resident.length>1){
            currentData.roster.push(currentData.proprety[currentData.pick.Proprety].proprety.resident[index])
            currentData.proprety[currentData.pick.Proprety].proprety.resident.splice(index,1)
            update();

    
    }
    
    }
    






    return(<Stack direction={'row'} justifyContent={'space-evenly'}>


    <Stack>
        <p> {currentData.roster.length+ '/' + roster.maxRoster()}</p>
{currentData.roster.map((elment,index)=>(
    <BImage onClick={()=>{moveToProprety(index)}}     bulb={elment} W={150} ></BImage>

))}

    </Stack>


    <p></p>
    
    
    <Stack>

    <p> {currentData.proprety[currentData.pick.Proprety].proprety.resident.length+ '/' + currentData.proprety[currentData.pick.Proprety].proprety.maxAmountBulb()}</p>
    {currentData.proprety[currentData.pick.Proprety].proprety.resident.map((elment,index)=>(
    <BImage onClick={()=>{moveToRoster(index)}} bulb={elment} W={150} ></BImage>

))}

    </Stack>

    </Stack>)
}

export default RosterTab