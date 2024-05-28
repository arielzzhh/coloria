import { useState } from "react";
import { currentData } from "../../../Script/Data/Data";
import Running from "./options/Running";
import BattleMenu from "../BattleOptions/BattleMenu";
import WeaponAttack from "./options/WeaponAttack";
import MagicAttack from "./options/MagicAttack";
export function BattleO ({sit,changeTab,Animate,stoping,setOptionMenu}){
    const [bulbi,setBulbi]=useState(currentData.battle.nextAttacker);


switch(sit){
    case 'running':
   return < Running></Running> 
   case 'BattleMenu':
    return <BattleMenu setOptionMenu={setOptionMenu}></BattleMenu>
    case 'weaponAttack':
    return <WeaponAttack Animate={Animate} bulb={currentData.battle.nextAttacker} setOptionMenu={setOptionMenu}></WeaponAttack>
    case 'magicAttack':
        return <MagicAttack Animate={Animate} bulb={currentData.battle.nextAttacker} setOptionMenu={setOptionMenu}></MagicAttack>

}


    



}


export default BattleO;