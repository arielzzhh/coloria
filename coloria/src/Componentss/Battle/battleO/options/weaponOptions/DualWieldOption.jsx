import ReturnBack from "../ReturnBack"
import { useState } from "react"
import { currentData } from "../../../../../Script/Data/Data"
import battle from "../../../../../Script/battle/battle"


export function DualWieldOption ({bulb,setOptionMenu,Animate}){
    const [useedAttack,setUsedAttack]=useState('doubleSlash')
    const [index,setIndex]  =useState(0)




    function changeToComboAttack(num){
        if(battle.PossibleToPickOne(num)){
            setUsedAttack('doubleSlash')
            setIndex(num)
            bulb.weapon.nextAttack='doubleSlash';
            console.log('doubleSlash')
        
        } 
        
        }





    return(<>
        <ReturnBack setOptionMenu={setOptionMenu}></ReturnBack>
        <rect x={5} y={25} width={50} height={50} fill="grey"></rect>
    <text  fontSize={'0.25em'} x={20} y={32} >doubleSlash</text>
    <circle onClick={()=>{changeToComboAttack(0)}} cx={15} cy={45} r={5} fill={`rgb(${currentData.Enemy[0].rgb[0]},${currentData.Enemy[0].rgb[1]},${currentData.Enemy[0].rgb[2]})`}></circle>
    <circle onClick={()=>{changeToComboAttack(1)}} cx={40} cy={45} r={5} fill={`rgb(${currentData.Enemy[1].rgb[0]},${currentData.Enemy[1].rgb[1]},${currentData.Enemy[1].rgb[2]})`} ></circle>
    <text onClick={()=>{setUsedAttack('danceBlade');  ;bulb.weapon.nextAttack='danceBlade'   }}  fontSize={'0.4em'} x={5} y={65} >danceBlade</text>

    
    <text textAnchor="middle" fontSize={'0.40em'} x={15} y={47} fill="white" >I</text>
    <text textAnchor="middle" fontSize={'0.40em'} x={40} y={47} fill="white">II</text>


    <text  fontSize={'0.25em'} x={12} y={65} ></text>


    
    <text  fontSize={'0.6em'} x={5} y={85} >{useedAttack}</text>  


    <rect onClick={()=>{bulb.weapon.attack(bulb,index);setOptionMenu('running') ;   Animate();}} x={150} y={55} width={50} height={20} stroke="grey" fill="transparent" ></rect>
<text  x={150} y={70} fontSize={'0.60em'}>attack</text>
    
    </>)
}



export default DualWieldOption