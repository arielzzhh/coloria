import { NoActive } from "./NoActive";
import {Active} from "./Active";
import Resolve from "./Resolve";
import { useState,useContext } from "react";
import { UserContext } from "../../../../Router/Routing";





export function AdventureStatus({adv,setTabiName}){
    const { data, update } = useContext(UserContext);


    switch (true){
        case (data.pick.adventure.status==true&&data.pick.adventure.activeDay<=0):
            return (<Resolve adv={adv} setTabiName={setTabiName} ></Resolve> )
            case (data.pick.adventure.status==true):
                return (<Active adv={adv} data={data} update={update} ></Active> )
            case (data.pick.adventure.status==false):
            return (<NoActive setTabiName={setTabiName} adv={adv} data={data} update={update} ></NoActive> )
    
     



}

}


export default AdventureStatus