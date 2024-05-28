
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material";
import adventure from "../../../Script/adventures/adventure";
import { currentData } from "../../../Script/Data/Data";
import battle from "../../../Script/battle/battle";


export function  FinishBattle(){


const navigator =useNavigate();


function FinishBattle (){


if(currentData.map){

    navigator('/map')


    currentData.adventure.CheakObjectiveAfterBattle()



}


if(!currentData.map){

if(currentData.adventure.currentObjective().objective[0]=='battle'&&battle.TeamDead(currentData.adventure.currentObjective().objective[1])){
    currentData.adventure.currentObjective().finishObjective();
}

if(currentData.adventure.currentObjective()==null){
    currentData.adventure.Finish();

}


navigator('/')

}






    
    
    
    
    


    



} 



    return(<>



    <p>battleIsFinised</p>

    <Button onClick={FinishBattle} >Countinue </Button>
    
    
    </>)
}


export default FinishBattle