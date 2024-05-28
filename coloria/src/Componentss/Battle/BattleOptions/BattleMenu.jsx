import { useState } from "react";
import { currentData } from "../../../Script/Data/Data";
import battle from "../../../Script/battle/battle";

export function BattleMenu ({setOptionMenu,bulb}){


    return (
        <>




{/**base */}
<rect x={5} y={10} width={70} height={80} fill="grey"></rect>







{/*Next Attacker */}
<rect x={5} y={10} width={70} height={80} fill="grey"></rect>
<text x={40} y={14} textAnchor="middle"  fontSize={5} >next attacker</text>
<text x={40} y={24} textAnchor="middle"  fontSize={5} >{currentData.battle.nextAttacker.name[0]}</text>



{/*Options */}

<rect onClick={()=>{battle.previewRestart();setOptionMenu('weaponAttack');}} x={135} y={25} width={60} height={10} stroke="silver" fill="silver"></rect>
<text onClick={()=>{battle.previewRestart();setOptionMenu('weaponAttack');}} style={{fontSize:'0.4em'}} x={145} y={30}>weapon attack</text>
<rect onClick={()=>{setOptionMenu('magicAttack')}} x={135} y={35} width={60} height={10} stroke="silver" fill="cyan"></rect>
<text onClick={()=>{setOptionMenu('magicAttack')}} style={{fontSize:'0.4em'}} x={145} y={40}>useMagic</text>










        
      


        </>
    );
}

export default BattleMenu;