import BImage from "../Bulb/Images/BImage"
import { currentData } from "../../Script/Data/Data"
import roster from "../../Script/Handaling/roster"
import { useState } from "react"
import { UserContext } from "../../Router/Routing"
import { useContext } from "react"


export function BulbSlot ({element,index,onClick}){
  const [look,setLook ]=useState(0)
  const { data, update } = useContext(UserContext);


function returnBackgroundIfIndexPicked(){

  
}



  switch(element){
  
  case null:
  return(<svg  viewBox="0 0 100 100" style={{backgroundColor:'red'}} width={'100px'}></svg>)
  case element:
  return(<BImage DeleteState={look} onMouseLeave={()=>{setLook(0);update() }} onMouseEnter={()=>{setLook(1);update() }}    onClick={onClick}  index={index} bulb={element} W={100} ></BImage>
)

 
  }
}


export default BulbSlot