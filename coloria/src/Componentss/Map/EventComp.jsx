import { Button,  Typography,Grid, ButtonGroup } from "@mui/material"
import { useState,useContext } from "react"
import MapTiles from "./MapTiles"
import Events from "./mapEvents/Events"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
 import { UserContext } from "../../Router/Routing";
 import ObjectiveBoeard from "./ObjectiveBoeard";
 import { useNavigate } from "react-router-dom";
 import objective from "../../Script/adventures/Objective/objectives";
 import Log  from "./Log"
import Objective from "./Objective";
import { Map,CircleHelp } from "lucide-react";
import { ObjectiveType } from "./ObjectiveType";





export function EvemtComp ({currentData}){
  const [whichIsLoocking,setWhichIsLooking]=useState(0)
    const { data, update } = useContext(UserContext);




   const naviagor =useNavigate()

    function move (direction){ 
      currentData.map.moveInMap(direction)
     console.log(  )

    }


    return(<>
    
    
    <div style={{display:'flex',justifyContent:'space-evenly' ,width:"100%"}} >


<div style={{width:'100%'}} >
            <svg viewBox="0 0 100 100" style={{backgroundColor:'rgb(54,44,54)'}}  >
    
    
    
              
            <MapTiles></MapTiles></svg>
            <Button variant="contained" onClick={()=>{move('left') ;update() ; }} disabled={!currentData.map.isCliamable('left')||currentData.map.currentTile().EventMsg()=='MustToFinish' }  style={{width:'100%' ,height:'5%',backgroundColor:'grey'}}><KeyboardArrowUpIcon></KeyboardArrowUpIcon></Button>
            <Button variant="contained" onClick={()=>{move('up');update()}} disabled={!currentData.map.isCliamable('up')||currentData.map.currentTile().EventMsg()=='MustToFinish'             } style={{width:'50%',height:'5%',backgroundColor:'grey'}}> <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon></Button>
            <Button variant="contained" onClick={()=>{move('down');update(); }} disabled={!currentData.map.isCliamable('down')||currentData.map.currentTile().EventMsg()=='MustToFinish' } style={{width:'50%',height:'5%',backgroundColor:'grey'}}><KeyboardArrowRightIcon></KeyboardArrowRightIcon></Button>
            <Button variant="contained" onClick={()=>{move('right');update()}} disabled={!currentData.map.isCliamable('right')||currentData.map.currentTile().EventMsg()=='MustToFinish' }  style={{width:'100%',height:'5%',backgroundColor:'grey'}}>   <KeyboardArrowDownIcon></KeyboardArrowDownIcon></Button>
            <Button disabled={currentData.adventure.isNextObjectiveisInMap()}   onClick={()=>{  currentData.adventure.Finish();naviagor('/')  } }variant="contained" style={{width:'50%',height:'5%',backgroundColor:'grey'}}> Finish</Button>



    </div> 
    <div style={{width:'100%'}}>
 


<ButtonGroup fullWidth>
<Button onClick={()=>{setWhichIsLooking(0)}} variant="contained" fullWidth><CircleHelp />Tile</Button>
<Button onClick={()=>{setWhichIsLooking(1)}} variant="contained" fullWidth><CircleHelp />adventure</Button>
<Button onClick={()=>{setWhichIsLooking(2)}} variant="contained" fullWidth><Map />Map</Button> 

   </ButtonGroup>
    <ObjectiveType map={currentData.map} tile={currentData.map.tiles[currentData.map.cord[1]][currentData.map.cord[0]]}  whichOne={whichIsLoocking}></ObjectiveType>




    
    




      </div> 


      
      
      
      </div>
      
      
      
      
      
      
      </>)


}


export default EvemtComp