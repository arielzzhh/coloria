import { useState } from "react";
import SwordOption from "./weaponOptions/SwordOption";
import { useContext } from "react";
import { UserContext } from "../../../../Router/Routing";
import DualWieldOption from "./weaponOptions/DualWieldOption";
import HammerOption from "./weaponOptions/HammerOption";
import BowOption from "./weaponOptions/BowOption";

export function WeaponAttack({bulb,setOptionMenu,Animate}){
    const { data, update } = useContext(UserContext);

    const [weaponIndex,setWeaponIndex] =useState(0)


    switch(true){
        case  (bulb.weapon.constructor.name=='Sword'):
        return (<SwordOption Animate={Animate} update={update} bulb={bulb} setOptionMenu={setOptionMenu}></SwordOption>)
        case  (bulb.weapon.constructor.name=='DualWield'):
        return (<DualWieldOption Animate={Animate} update={update} bulb={bulb} setOptionMenu={setOptionMenu}></DualWieldOption>)
        case  (bulb.weapon.constructor.name=='Hammer'):
            return (<HammerOption Animate={Animate} update={update} bulb={bulb} setOptionMenu={setOptionMenu}></HammerOption>)
        case  (bulb.weapon.constructor.name=='Bow'):
        return (<BowOption Animate={Animate} update={update} bulb={bulb} setOptionMenu={setOptionMenu}></BowOption>)
    
    
    
        }
    }
    


 






    



    
    




export default WeaponAttack;