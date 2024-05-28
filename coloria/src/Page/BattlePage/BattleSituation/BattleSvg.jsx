
import { useState } from "react"
import TeamA from "../../../Components/Battle/ActionBulb/TeamA"
import BattleO from "../../../Components/Battle/battleO/battleO"
import StartBattle from "./StartBattle";
import MiddleBattle from "./MiddleBattle";
import FinishBattle from "./FinishBattle";
import { currentData } from "../../../Script/Data/Data";
import ItemUsing from "./ItemUsing";

export function BattleSvg({animate,setOptionMenu,OptionMenu,stop,setsituation,situation}){






    switch(situation){
        case 'startBattle':
        return (<StartBattle setsituation={setsituation}></StartBattle>)
        case 'battle':
        return (<MiddleBattle setsituation={setsituation} stop={stop} OptionMenu={OptionMenu} setOptionMenu={setOptionMenu} animate={animate}></MiddleBattle>)
        case 'FinishBattle':
        return (<FinishBattle setsituation={setsituation}></FinishBattle>)
        case 'FinishBattle':
        return (<FinishBattle setsituation={setsituation}></FinishBattle>)
        case 'ItemUsing':
        return (<ItemUsing setsituation={setsituation}></ItemUsing>)

    }



 
}



export default BattleSvg