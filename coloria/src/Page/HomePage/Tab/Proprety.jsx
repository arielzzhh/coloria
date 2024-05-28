import { currentData } from "../../../Script/Data/Data";
import MapTiles from "../../../Components/Map/MapTiles";
import BImage from "../../../Components/Bulb/Images/BImage";
import { Button,ButtonGroup,Stack } from "@mui/material";
import { MoveUp,MoveDown } from "lucide-react";
import { UserContext } from "../../../Router/Routing";
import { useContext, useState } from "react";
import proprety from "../../../Script/proprety/proprety/proprety"
import CVector from "../../../Components/Items/colorVectors/CVector";
import bank from "../../../Script/Bank/bank";
import BuilduingSlot from "../../../Components/settelements/BuilduingSlot";
import BuilduingInfo from "../../../Components/settelements/BuilduingInfo";
import BuilduingUpgrade from "../../../Components/settelements/BuilduingTypes/BuilduingUpgrade";
import PropretyTab from "./propretyTab/PropretyTab";

export function Proprety ({setTabiName,proprety,updateData,myData,}){
        const { data, update } = useContext(UserContext);
        const [propretyTab,setPropretyTab]=useState('')



    return(< >
<ButtonGroup>
<Button onClick={()=>{setPropretyTab('')}} fullWidth variant="contained">BaseInfo</Button>
<Button onClick={()=>{setPropretyTab('Builduings')}} fullWidth variant="contained">Builduings</Button>
<Button onClick={()=>{setPropretyTab('roster')}} fullWidth variant="contained">roster</Button>
<Button onClick={()=>{setPropretyTab('Inventory')}} fullWidth variant="contained">Inventory</Button>
</ButtonGroup>

<PropretyTab update={update} propretyTab={propretyTab} setPropretyTab={setPropretyTab}></PropretyTab>



        </>
)
}




export default  Proprety