import { useState } from "react";
import ReturnBack from "../ReturnBack";
import TargetOption from "../TargetOption";
import { Button, Grid } from "@mui/material";
import { currentData } from "../../../../../Script/Data/Data";
import battle from "../../../../../Script/battle/battle";

export function SwordOption ({bulb,setOptionMenu,Animate}){
    const [useedAttack,setUsedAttack]=useState('comboSword')
    const [index,setIndex]  =useState(0)



  


     
/*   
bulb.weapon.nextAttack='comboSword';

*/


function activeAttack (indexi){

    if (indexi==index){
        return 'yellow'

    }

    if (indexi!==index){
        return 'black'
    }
}






function changeToComboAttack(num){
    battle.previewRestart()

if(battle.PossibleToPickOne(num)){
    setUsedAttack('comboSword')
    setIndex(num)
    bulb.weapon.nextAttack='comboSword';







} 

}










   

    
    return(<>
    <ReturnBack setOptionMenu={setOptionMenu}></ReturnBack>
{/* BattleOption*/}
    <rect x={5} y={25} width={50} height={70} fill="grey"></rect>
    <text  fontSize={'0.4em'} x={12} y={32} >comboSword</text>
 
    {currentData.battle.Enemy.map((elment,indexi)=>(
        <>
    <circle onClick={()=>{changeToComboAttack(indexi)}} stroke={activeAttack(indexi)}cx={15+indexi*15} cy={45} r={5} fill={`rgb(${elment.rgb[0]},${elment.rgb[1]},${elment.rgb[2]})`}></circle>
    
    <circle cx={15+indexi*15} r={5} cy={58}></circle>
    <text fontSize={'0.40em'} x={10+indexi*15} y={60} stroke="white">-{bulb.weapon.ComboDmgPreview(bulb,elment).toFixed()}</text>
    </>
    ))}



   



    <text onClick={()=>{setUsedAttack('Trust');  ;bulb.weapon.nextAttack='Trust' ;   }}  fontSize={'0.4em'} x={5} y={75} >Trust</text>
    <text textAnchor="middle" fontSize={'0.40em'} x={15} y={47} fill="white" >I</text>
    <text textAnchor="middle" fontSize={'0.40em'} x={30} y={47} fill="white">II</text>
    <text textAnchor="middle" fontSize={'0.40em'} x={45} y={47} fill="white">III</text>
    <circle cx={15} r={5} cy={80}></circle>    <circle cx={22} r={5} cy={80}></circle>
<text x={15} y={85} stroke="white" >{bulb.weapon.trustDmgPreview(bulb)}</text>


    <text  fontSize={'0.6em'} x={125} y={85} >Next :{useedAttack}</text>  
     




    <rect x={70} y={15} width={130} height={20} stroke="grey" fill="transparent" ></rect>
    <text  x={120} y={22} fontSize={'0.40em'}>description</text>
    <text  x={85} y={32} fontSize={'0.20em'}>{bulb.weapon.attackDescription()}</text>


<rect onClick={()=>{bulb.weapon.attack(bulb,index);setOptionMenu('running') ;   Animate();}} x={150} y={55} width={50} height={20} stroke="grey" fill="transparent" ></rect>
<text  x={150} y={70} fontSize={'0.60em'}>attack</text>







    
    
    
    </> )
}


export default SwordOption ;