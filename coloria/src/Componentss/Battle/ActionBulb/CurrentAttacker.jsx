import { Sword } from "lucide-react";
import { useState } from "react";
import bulb from "../../../Script/bulb/bulb";
import { currentData } from "../../../Script/Data/Data";
import { Shield } from "lucide-react";



export function CurrentAttacker({bulb}){
    const [currentAttacker,setCurrentAttacker]=useState(bulb)


    function updateAttacker(){
        let nextAttacker={...currentData.battle.nextAttacker}
        setCurrentAttacker(nextAttacker);

    }


    


    return(<>
    <rect x={0} y={60} width={80} height={40} fill="silver"></rect>
    <circle cx={18} cy={82} r={10} fill={`rgb(${bulb.rgb[0]*5},${bulb.rgb[1]*5},${bulb.rgb[2]*5})`}></circle>


<g style={{fontSize:'4px'}}> 

<text style={{fontSize:'5'}} x={40} y={65}>{'nextUser:'}</text>
<text x={0} y={65}>{bulb.name[0]}</text>
<rect x={34} y={66} width={45} height={6} fill="red" ></rect>
<polygon points="0,92 1,95 6,99 11,95 ,12,92  " stroke="black" strokeWidth={1} fill="red"></polygon>
<polygon points="13,92 14,95 19,99 24,95 ,25,92  " stroke="black" strokeWidth={1} fill="green"></polygon>
<polygon points="26,92 27,95 32,99 37,95 ,38,92  " stroke="black" strokeWidth={1} fill="blue"></polygon>

<rect y={92} x={45} width={3} height={8} fill="red" stroke="black" ></rect>
<rect y={97} x={42.5} width={8} height={2} fill="grey"  ></rect>

<rect y={92} x={55} width={3} height={8} fill="green" stroke="black" ></rect>
<rect y={97} x={52.5} width={8} height={2} fill="grey"  ></rect>



<rect y={92} x={65} width={3} height={8} fill="blue" stroke="black" ></rect>
<rect y={97} x={62.5} width={8} height={2} fill="grey"  ></rect>








<text x={40} y={76}>{'dmg:'+bulb.physicalDmg()}</text>
<text x={60} y={76}>{'defence:'+bulb.physicalArmors()}</text>
<text x={50} y={70} fill="white">{bulb.hp[0]+'/'+bulb.hp[1]}</text>





<text x={35} y={85}>{'critical :' +' chance'+bulb.criticalChance()+'/ dmg:'+bulb.criticalPower()}</text>

<text x={5} y={96} fill="white">{bulb.colorDefence(0)}</text>
<text x={18} y={96} fill="white">{bulb.colorDefence(1)}</text>
<text x={31} y={96} fill="white">{bulb.colorDefence(2)}</text>
<text x={45} y={96} fill="white">{bulb.colorAttack(0)}</text>
<text x={55} y={96} fill="white">{bulb.colorAttack(1)}</text>
<text x={65} y={96} fill="white">{bulb.colorAttack(2)}</text>




</g>

    </>)

}


export default CurrentAttacker;