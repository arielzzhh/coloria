import battle from "../../../../../Script/battle/battle"
import { useState } from "react"
import ReturnBack from "../ReturnBack"
import { currentData } from "../../../../../Script/Data/Data"




export function HammerOption ({bulb,setOptionMenu,Animate}){
    const [useedAttack,setUsedAttack]=useState('HeadSmash')
    const [index,setIndex]  =useState(0)



    function changeToComboAttack(num){
        if(battle.PossibleToPickOne(num)){
            setUsedAttack('comboSword')
            setIndex(num)
            bulb.weapon.nextAttack='comboSword';
        } 
        }
        


return (<>
    <ReturnBack setOptionMenu={setOptionMenu}></ReturnBack>

    <rect x={5} y={25} width={50} height={50} fill="grey"></rect>
    <text  fontSize={'0.4em'} x={12} y={32} >HeadSmash</text>
    {currentData.Enemy.map((elment,indexi)=>(
    <circle onClick={()=>{changeToComboAttack(indexi)}} cx={15+indexi*15} cy={45} r={5} fill={`rgb(${currentData.Enemy[indexi].rgb[0]},${currentData.Enemy[indexi].rgb[1]},${currentData.Enemy[indexi].rgb[2]})`}></circle>
    ))}


<text onClick={()=>{setUsedAttack('Trust');  ;bulb.weapon.nextAttack='Trust' ; console.log(bulb)  }}  fontSize={'0.4em'} x={5} y={65} >Trust</text>
    <text textAnchor="middle" fontSize={'0.40em'} x={15} y={47} fill="white" >I</text>
    <text textAnchor="middle" fontSize={'0.40em'} x={30} y={47} fill="white">II</text>
    <text textAnchor="middle" fontSize={'0.40em'} x={45} y={47} fill="white">III</text>






<rect x={70} y={15} width={130} height={20} stroke="grey" fill="transparent" ></rect>
    <text  x={120} y={22} fontSize={'0.40em'}>description</text>
    <text  x={85} y={32} fontSize={'0.20em'}>{bulb.weapon.attackDescription()}</text>
</>)


}


export default HammerOption