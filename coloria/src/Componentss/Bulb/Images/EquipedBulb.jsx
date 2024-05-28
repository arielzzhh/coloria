import { Directions } from "@mui/icons-material"
import Item from "../../Items/Item"
import { Stack } from "@mui/material"




export function EquipedBulb ({bulb}){



    return(<Stack style={{backgroundColor:'gold',border:'brown solid 2px'}} direction={'column'}>
    <p>{bulb.name[0]} </p>
    <p>Equiped </p>
    <Item W="150" itemShown={bulb.weapon}></Item>
    <br />
    <Item W="150" itemShown={bulb.headGear}></Item>
    <br />
    <Item W="150" itemShown={bulb.belt}></Item>
    <br />

    <Item W="150" itemShown={bulb.jumper}></Item>

    
    </Stack>)
}


export default EquipedBulb 