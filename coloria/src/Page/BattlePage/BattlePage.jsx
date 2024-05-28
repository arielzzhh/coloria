import BulbTeamBar from "../../Components/Battle/BulbTeamBar";
import { currentData } from "../../Script/Data/Data";
import { Button, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import battle from "../../Script/battle/battle";
import BattleLog from "../../Components/Battle/BattleLog/BattleLog";
import BattleO from "../../Components/Battle/battleO/battleO";
import BulbA from "../../Components/Battle/ActionBulb/BulbA";
import TeamA from "../../Components/Battle/ActionBulb/TeamA";
import CurrentAttacker from "../../Components/Battle/ActionBulb/CurrentAttacker";
import EnemyAi from "../../Script/battle/EnemyAi";
import BattleSvg from "./BattleSituation/BattleSvg";

let gameLoop;





export function BattlePage() {
  const [OptionMenu,setOptionMenu]= useState('running')
  const [Data,setDate]= useState(currentData)
  const [situation,setsituation]=useState('startBattle');


  function makeCopies(){
   let Copies = {...currentData}
 setDate(Copies)

  }



  function BattleFinised(){
    let isbattleFinised = currentData.battle.Enemy.every((elment,key)=>{
   return !elment.isAlive
    })

if (isbattleFinised==true){
  setsituation('FinishBattle');
  stop();
}

      }
   






 


//useEffect(()=>{Animate()},[])


function Animate() {
  clearInterval(gameLoop); // Clear any existing interval

  

  gameLoop = setInterval(() => {
    battle.moveEntireBattle();  
    makeCopies() 


    

    if(battle.CheakIfStop()==true){
      if(currentData.battle.nextAttacker.cheakIfInArray('Team')){
      stop()      
      setOptionMenu('BattleMenu') }
      if(currentData.battle.nextAttacker.cheakIfInArray('Enemy')){
        EnemyAi.EnemyAttack();
      }
      


      makeCopies() 



      BattleFinised()
   




}}, 15);

  

  }

  function stop (){
    clearInterval(gameLoop); // Clear the interval when stopping
  }

useEffect(()=>{Animate()},[])
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-evenly"}>
      <BulbTeamBar titles={"Team"} Team={currentData.Team}></BulbTeamBar>

        <div>
      <BattleSvg situation={situation} setsituation={setsituation} stop={stop} OptionMenu={OptionMenu} setOptionMenu={setOptionMenu} animate={Animate}></BattleSvg>



{console.log()}


        </div>
        <BulbTeamBar titles={"enemy"} Team={currentData.battle.Enemy}></BulbTeamBar>

      </Stack>

      
    </>
  );
}




export default BattlePage