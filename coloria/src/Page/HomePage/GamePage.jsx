import { Button, Stack, ButtonGroup, Typography} from "@mui/material"
import { useNavigate } from "react-router-dom";
import Tab from "./Tab/Tab"
import { useState,useContext } from "react"
import Day from "../../Script/Date/Day"
import RosterBulb from "../../Components/Bulb/RosterBulb"
import DataManipulate from "../../Script/util/DataManipulate";
import { UserContext } from "../../Router/Routing";
import { currentData,loadGame } from "../../Script/Data/Data";
import Log from "../../Components/Map/Log";
import { Backpack } from "lucide-react";
import { Pyramid } from "lucide-react";
import { Mail,Home,Pickaxe,Tent,CirclePlus,Castle,Swords } from "lucide-react";
import bank from "../../Script/Bank/bank";
import InboxIo from "../../Script/Inbox/InboxIo";
import GameButton from "./GameButton";

export function GamePage ({}){
  const { data, update } = useContext(UserContext);
    const [TabiNane,setTabiName] =useState('')
    const [changeActive,setChangeActive]=useState(0)
  const navigate = useNavigate();




 function  showBattle(){
  if(currentData.battle.Enemy!==null){
    return 'block'

  }
return 'none'
}









    return(<Stack direction={'row'}>


        <Stack style={{width:'15%'}}>
        <Button  style={{ textTransform: 'lowercase',display:showBattle() }}  onClick={()=>{navigate('/battle')}}  variant="contained"> <Swords />return to battle</Button>
 
          <Button disabled={currentData.inventory.length==0} style={{ textTransform: 'lowercase' }}  onClick={()=>{navigate('/Inventory')}}  variant="contained"> <Backpack />backPack </Button>
          <Button  disabled={currentData.roster.length==0} style={{ textTransform: 'lowercase' }} onClick={()=>{ navigate('/bulb')}} variant="contained">Roster</Button>




         <div style={{backgroundColor:'silver'}}>
          
          
            </div>


        




        <div style={{ fontSize:'1.5eem'}}>
      {data.roster.map((element, index) => (
       <> <RosterBulb    key={index} element={element} />
       </>
      ))}
    </div>



        </Stack>


        <Stack style={{width:'60%'}} >
       
        
  <ButtonGroup   variant="contained" style={{height:'5vh'}} >
  <Button disabled={currentData.Inbox.length==0}  style={{ textTransform: 'lowercase' }} onClick={()=>{setTabiName('')} } fullWidth><Mail /></Button>
  <Button disabled={currentData.adventureData.adventureSearisActive==0&&currentData.adventureData.standByAdventures==0} style={{ textTransform: 'lowercase' }} onClick={()=>{setTabiName('AdventureBoaerd')}} fullWidth><Tent /></Button>
  <Button  disabled={currentData.proprety.length==0} style={{ textTransform: 'lowercase' }} onClick={()=>{setTabiName('PropretyBoeard')}} fullWidth><Home /></Button>
  <Button disabled={currentData.trainingField==null} style={{ textTransform: 'lowercase' }} onClick={()=>{setTabiName('Trainining')}} fullWidth><CirclePlus /></Button>
  <Button disabled={currentData.Crafting.supply.length==0&&currentData.Crafting.Gear.length==0} style={{ textTransform: 'lowercase' }} onClick={()=>{setTabiName('Crafthing')} } fullWidth><Pickaxe /></Button>


</ButtonGroup>


<Tab data={data} update={update}  setTabiName={setTabiName}  tab={TabiNane}></Tab>





        </Stack>
        <Stack style={{width:'30%'}}>
        <div style={{}}>
    <GameButton update={update}></GameButton>
        <Stack style={{backgroundColor:'gold'}} direction={'row'} justifyContent={'space-evenly'}>
          
        <p style={{fontWeight:'1000',fontSize:'1.6em',border:'black solid 2px' }}>Day : {data.Date.day}</p>
          <p style={{fontWeight:'1000',fontSize:'1.6em', }}>/</p>
          <p style={{fontWeight:'1000',fontSize:'1.6em',border:'black solid 2px' }}> maxDay :{data.Date.maxDay}</p>
       
   

        </Stack>

        <Stack   onClick={()=>{setTabiName('Budgets')}} style={{width:'100%',height:'auto',fontSize:'40px',backgroundColor:'silver',border:'black solid 2px'}} direction={'row'} justifyContent={'space-evenly'}  >
        {data.bank.map((element, index) => {
  if (element !== 0) {
    return (
      <div key={index}>
        <Pyramid fill={bank.NumberBank(index)} />
        {element}
      </div>
    );
  }
  return null; // If element is zero, return null to render nothing
})}
         
          </Stack>


        </div>

        </Stack>

        


    
    
    
    </Stack>)
}


export default GamePage