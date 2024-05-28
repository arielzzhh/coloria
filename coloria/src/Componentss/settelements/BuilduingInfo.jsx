import { useState } from "react";
import HouseDash from "./BuilduingTypes/HouseDash";
import WearHouse from "./BuilduingTypes/WearHouseDash";
import TrainingDash from "./BuilduingTypes/TrainingDash";
import MineDash from "./BuilduingTypes/MineDash";
export function BuilduingInfo({builduing,proprety}){
const [whichType,setWhichType]=useState()





switch (true){
    case (proprety.Builduings[builduing].constructor.name=='House'):
    return(<HouseDash Builduing={proprety.Builduings[builduing]}></HouseDash>)
    case (proprety.Builduings[builduing].constructor.name=='WearHouse'):
    return(<WearHouse Builduing={proprety.Builduings[builduing]}></WearHouse>)
    case (proprety.Builduings[builduing].constructor.name=='TrainingField'):
    return(<TrainingDash Builduing={proprety.Builduings[builduing]}></TrainingDash>)
    case (proprety.Builduings[builduing].constructor.name=='MineSystem'):
    return(<MineDash Builduing={proprety.Builduings[builduing]}></MineDash>)
}


}



export default BuilduingInfo;