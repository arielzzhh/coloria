import battle from "../../../../../Script/battle/battle"
import { currentData } from "../../../../../Script/Data/Data"
import { useState } from "react"

export function BowOption({bulb,setOptionMenu,Animate}) {
    const [useedAttack,setUsedAttack]=useState('ShootArrow')
    const [index,setIndex]  =useState(0)
    
function activeAttack (indexi){

    if (indexi==index){
        return 'yellow'

    }

    if (indexi!==index){
        return 'black'
    }
}


function changeToShootArrow(num){
    battle.previewRestart()

if(battle.PossibleToPickOne(num)){
    setIndex(num)


 



} 

}

    
    
    
    
    
    
    
    
    return(<>


    
    
    <p>ariel astangelov</p>
    <text onClick={()=>{setUsedAttack('ShootArrow');  ;bulb.weapon.nextAttack='ShootArrow' ; console.log(bulb.weapon.preview(bulb)) }}  fontSize={'0.4em'} x={5} y={95} >ShootArrow</text>
    <text onClick={()=>{setUsedAttack('SpredShot');  ;bulb.weapon.nextAttack='SpredShot' ;  console.log(bulb.weapon.preview(bulb))  }}  fontSize={'0.4em'} x={45} y={95} >SpredShot</text>
    <text onClick={()=>{setUsedAttack('PowerShot');  ;bulb.weapon.nextAttack='PowerShot' ;  console.log(bulb.weapon.preview(bulb))  }}  fontSize={'0.4em'} x={75} y={95} >PowerShot</text>
    <text fontSize={'0.40em'} x={140} y={90} stroke="white"> {useedAttack}:     target: {index}</text>
    preview

    {currentData.battle.Enemy.map((elment,indexi)=>(
        <>
    <circle onClick={()=>{changeToShootArrow(indexi)}} stroke={activeAttack(indexi)}cx={15+indexi*15} cy={45} r={5} fill={`rgb(${elment.rgb[0]},${elment.rgb[1]},${elment.rgb[2]})`}></circle>
    
    <circle cx={15+indexi*15} r={5} cy={58}></circle>
    <text fontSize={'0.40em'} x={10+indexi*15} y={60} stroke="white">-{bulb.weapon.preview(bulb)}</text>
    </>
    ))}




<rect onClick={()=>{bulb.weapon.attack(bulb,index);setOptionMenu('running') ;   Animate();}} x={150} y={55} width={50} height={20} stroke="grey" fill="transparent" ></rect>
<text  x={150} y={70} fontSize={'0.60em'}>attack</text>

    
    
    </>)
}


export default BowOption;