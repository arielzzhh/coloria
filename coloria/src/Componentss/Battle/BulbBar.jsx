import { currentData } from "../../Script/Data/Data"
import { useState } from "react"
import BImage from "../Bulb/Images/BImage"
import { EquipedStatus } from "./BattleOptions/EquipedStatus/EquipedStatus"
import bulb from "../../Script/bulb/bulb"

export function BulbBar ({Bulb,widthPer}){
    const [curBulbs,SetcurBulb] = useState(Bulb)


console.log(Bulb)

  
    return(<div style={{display:'flex',justifyContent:'center'}}>
     <BImage   bulb={Bulb} W={'150'} ></BImage>


    <svg    viewBox="0 0 300 150" style={{backgroundColor:'silver',border:'1px solid black',width:'100%'}}  > 

  



    

{/*  body */ }

{/*  cp points */ }
<circle cy={150} cx={55}    r={20} stroke="grey"  fill="white"></circle>
<circle cy={150} cx={55}    r={Bulb.CPointsPer/5} stroke="grey"  fill="yellow"></circle>
<text y={150} x={50} stroke="black" fill="black" >{Bulb.CPoints}</text>



    {/* hp */ }
    <rect  width={Bulb.HpPer()*1.5} y={0} height={25} x={0}   fill='red' ></rect>

    <rect  width={Bulb.staminaPer()*0.75} y={25} height={25} x={0}   fill='green' ></rect>
    <rect  width={Bulb.magicPer()*0.75} y={25} height={25} x={150}   fill='blue' ></rect>

    <text textAnchor="middle"  stroke="white" fontSize={'1.2em'} y={17} x={150}>{Math.floor(Bulb.hp[0])}/{Math.floor(Bulb.hp[1])}</text>
    <text textAnchor="middle" stroke="white" fontSize={'1.2em'}  y={45} x={80}>{Math.floor(Bulb.stamina[0])}/{Math.floor(Bulb.stamina[1])}</text>
    <text textAnchor="middle" stroke="white" fontSize={'1.2em'}  y={45} x={220}>{Math.floor(Bulb.magica[0])}/{Math.floor(Bulb.magica[1])}</text>





<EquipedStatus bulb={Bulb}></EquipedStatus>


     </svg>
     </div>)
}


