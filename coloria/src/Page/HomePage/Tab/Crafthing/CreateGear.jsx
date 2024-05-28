import { Grid,Button,Rating } from "@mui/material";
import { currentData } from "../../../../Script/Data/Data";
import { useState,useContext } from "react";
import Item from "../../../../Components/Items/Item";
import createItem from "../../../../Script/Creation/createItem";
import BImage from "../../../../Components/Bulb/Images/BImage";
import CVector from "../../../../Components/Items/colorVectors/CVector";
import bank from "../../../../Script/Bank/bank";
import { UserContext } from "../../../../Router/Routing";
import inventory from "../../../../Script/Handaling/inventory";


export function CreateGear(){
    const [currentitem,setCurrentItem]=useState(0)
    const[BulbCreator,setBulbCreator]=useState(currentData.roster[0])
    const { data, update } = useContext(UserContext);





    function costOfCurrentItem(){
      if (currentData.Crafting.Gear[currentitem][1]=='weapon'){
      return currentData.Crafting.Gear[currentitem][0].CreateWeaponPrice[currentData.Crafting.Gear[currentitem][2]]  
    
      }

      if (currentData.Crafting.Gear[currentitem][1]=='armor'){
        return currentData.Crafting.Gear[currentitem][0].CreateArmorPrice[currentData.Crafting.Gear[currentitem]]
        
      }


 




    }








    return(<>

   <Grid container spacing={4}> 
   <Grid item xs={12}>Who should make the Gear</Grid>
   {currentData.roster.map((elment,index)=>(
    <Grid key={index} item xs={2} >
    <BImage  onClick={()=>{setBulbCreator(elment)}}  bulb={elment}>  </BImage>
  </Grid>  
))}
<Grid item xs={12}></Grid>
<Grid item xs={6}>weaponCraft <Rating readOnly max={10} value={BulbCreator.haveSkill('weaponCraft')}  ></Rating></Grid>
<Grid item xs={6}>armorCraft <Rating readOnly max={10} value={BulbCreator.haveSkill('armorCraft')}  ></Rating></Grid>

   <Grid item xs={12}>Choose One Of Your Know Rescepie</Grid>
   {currentData.Crafting.Gear.map((elment,index)=>(
    <Grid key={index} item xs={2} >
      <Item  onClick={()=>{setCurrentItem(index)}}   W="auto" itemShown={createItem.GearSetRecepie(elment[0],elment[1],elment[2])}></Item>    
  </Grid>  
))}


<Grid item xs={12}>
<p>Create</p>
</Grid>

<Grid  item xs={4} >
<BImage W={'auto'}    bulb={BulbCreator}>  </BImage>
</Grid>
<Grid  item xs={4} >
  {console.log(currentData.Crafting.Gear[currentitem][0])}
  <Item     W="auto" itemShown={createItem.GearSetRecepie(currentData.Crafting.Gear[currentitem][0],currentData.Crafting.Gear[currentitem][1],currentData.Crafting.Gear[currentitem][2])}></Item> 


</Grid>

<Grid  item xs={4} > 
<p>Create</p>

<p>price</p>
{costOfCurrentItem().map((elment,index)=>(
<CVector color={elment[0]} amount={elment[1]}> </CVector>
))}



<Button disabled={!bank.CanIbuyAll(costOfCurrentItem())}    variant="contained" onClick={()=>{
  bank.lowerAllAmount(costOfCurrentItem());
   inventory.GainItem(createItem.GearSetRecepie(currentData.Crafting.Gear[currentitem][0],currentData.Crafting.Gear[currentitem][1],currentData.Crafting.Gear[currentitem][2]))  
   ;update();
    }} >Create</Button>

</Grid>
    

</Grid>



    
    </>)
}


export default  CreateGear