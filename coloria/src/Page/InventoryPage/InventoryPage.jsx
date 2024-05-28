import { useState,useContext } from "react"
import { Stack,Grid, Button, ButtonGroup } from "@mui/material";
import Item from "../../Components/Items/Item";
import ItemInfo from "../../Components/Inventory/ItemInfo";
import { UserContext } from "../../Router/Routing";
import InventoryComponent from "../../Components/Inventory/InventoryComponent";
import { currentData } from "../../Script/Data/Data";
import RosterBulb from "../../Components/Bulb/RosterBulb";
import { Swords } from "lucide-react";
import BImage from "../../Components/Bulb/Images/BImage";
import CompereItem from "./Compere/CompereItem";
import EquipedBulb from "../../Components/Bulb/Images/EquipedBulb";
import { useNavigate } from "react-router-dom";


export function InventoryPage (){
const { data, update } = useContext(UserContext);
const [item,setItem] =useState(0)
const [bulbIndex,setBulbIndex]=useState(0)


function PickedBulb(indexi){

   if (indexi==bulbIndex){
      return 'yellow'
   } 


return 'grey'
}



function link (){
   console.log(currentData.map==null)
   if(currentData.map==null){
      navigaor('/game')
   }
   if(currentData.map!==null){
      navigaor('/map') }
  }


const navigaor =useNavigate()



     return(<Stack direction={'row'} justifyContent={'space-evenly'} height={'75vh'}>
<Stack style={{width:'50%'}}>
<Button onClick={()=>{link()}} variant="contained" fullWidth >Return To game</Button>
   
   
   <InventoryComponent indexed={setItem} ></InventoryComponent></Stack>
<Stack style={{width:'15%'}}>
     
<Item W="100%" itemShown={currentData.inventory[item]}></Item>
<br />

<CompereItem bulbIndex={bulbIndex} item={currentData.inventory[item]}> </CompereItem>


<br />
</Stack>



<Stack>
<EquipedBulb bulb={currentData.roster[bulbIndex]}></EquipedBulb>

</Stack>












<Stack >
  {currentData.roster.map((elment,index)=>(
     <BImage onClick={()=>{setBulbIndex(index) }} bgcolor={PickedBulb(index)}  W={'100%'}   bulbIndex={bulbIndex} bulb={elment}></BImage>
  ))}



</Stack>






    </Stack>
   )
}


export default InventoryPage