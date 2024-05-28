import { Button } from "@mui/material"
import { currentData } from "../../Script/Data/Data"
import inventory from "../../Script/Handaling/inventory"
import { useContext } from "react";
import { UserContext } from "../../Router/Routing";

export function EquipButton ({bulb,Item}){
    const { data, update } = useContext(UserContext);




    return(<>
    <Button onClick={()=>{
        inventory.LoseItem(Item)
        
        
        currentData.inventory.push(bulb.weapon);  bulb.equipItemBasedOnItem(Item) ; update()}}>Equip</Button>
    </>)
}


export default EquipButton