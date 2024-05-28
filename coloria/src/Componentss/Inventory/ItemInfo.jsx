import { useState } from "react"
import { currentData } from "../../Script/Data/Data"
import SvgItem from "../Items/Item"
import TeamEquipe from "./TeamEquipe"
import { ItemStats } from "./ItemStats"





export function ItemInfo (){
    const [Inventory ,setItems]=useState(currentData.inventory)
    const [numberShown,setWeaponShown]=useState(0)

    return(<div>
<SvgItem  itemShown={Inventory[numberShown]}></SvgItem>












<TeamEquipe></TeamEquipe>



    </div>)
}


export default ItemInfo

