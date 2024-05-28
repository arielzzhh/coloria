
import { Stack } from "@mui/material"
import { currentData } from "../../../../Script/Data/Data"
import roster from "../../../../Script/Handaling/roster"
import Item from "../../../../Components/Items/Item"


export function PropretyInventory ({update}){

    
    



    return(<Stack direction={'row'} justifyContent={'space-evenly'}>


    <Stack>
        <p> {currentData.inventory.length }</p>
{currentData.inventory.map((elment,index)=>(
<Item W="150" itemShown={elment}></Item>
))}

    </Stack>


    <p></p>
    
    
    <Stack>

    <p> {currentData.proprety[currentData.pick.Proprety].proprety.resident.length }</p>
    {currentData.proprety[currentData.pick.Proprety].proprety.resident.map((elment,index)=>(
        <Item W="150" itemShown={elment}></Item>

))}

    </Stack>

    </Stack>)}

export default PropretyInventory