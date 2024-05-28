import { currentData } from "../Data/Data"
import bulb from "../bulb/bulb"







export class battle {

    //is 


static previewRestart (){
currentData.battle.Enemy.forEach((elment,index)=>{
elment.previewRestart();
})

currentData.roster.forEach((elment,index)=>{
    elment.previewRestart();
    })




}


  static  isTeam (team){
        let isPart =team.every((elment,index)=>{
            return elment.constructor.name=='bulb'
        })



        return isPart
    }




    //
      static TeamDead(team){
    return  team.every((elment,index)=>{
        return !elment.isAlive;
      })


      }

      static clearDmgPreview(team){

      }


   static addDmgPreview(team,whoToadd){
        
      }










    static PossibleToPickOne(numTarget){

        if (currentData.battle.Enemy[numTarget]&&currentData.battle.Enemy[numTarget].isAlive ){
         
            return true
          }
      
           
         else 
        return false 

        

    }


    static  possibleToPickManu(bulb,numTargets){

    }





   //battleLog 

   static sendLog(msg){
    currentData.battle.battleLog.push(msg)


   }


   static caculateReward(arrayOfBulbs){
   let baseRgb =[0,0,0];

  
   arrayOfBulbs.map((elment)=>{
    baseRgb[0]+=elment.rgb[0]
    baseRgb[1]+=elment.rgb[1]
    baseRgb[2]+=elment.rgb[2]
   })

   return baseRgb

   }


   static  SetUpBattle(arrayOfBulbs){
    currentData.Enemy.Team=arrayOfBulbs;
    


   }



    //attacks
   static ColorAttack (attacker,defender,colorIndex,enemyindex){
let cheakCritical = attacker.CriticalHit();
let attackerDmg =attacker.physicalDmg(1)*attacker.returnTargetMultyplayer()[enemyindex]
let defenderArmor=defender.physicalArmors()
let aggresorColorDmg = attacker.colorAttack(colorIndex)
let defendeColorArmor =defender.colorDefence(colorIndex)
let colorEvaluation =aggresorColorDmg-defendeColorArmor;




if(cheakCritical!=1){
    battle.sendLog('critical Hit');
    attackerDmg*=cheakCritical;
}



battle.sendLog(attacker.colorAttack(2))
    defender.loseHp((attackerDmg-defenderArmor)) //base dmg vs base armor 
    attacker.gainColorExperiance(colorEvaluation);
    defender.loseColorExperiance(colorEvaluation)
    battle.sendLog(attacker.name[0]+' Attacked'+defender.name[0] + ' ,and dealt  '+(attackerDmg-defenderArmor)+' dmg ')
battle.sendLog('attacker color dmg:'+aggresorColorDmg+'defender color defence' +defendeColorArmor)


}

    


    static finishTurn(amunt){
        currentData.battle.nextAttacker.Path=0;
    }





    


   





//movment

   static CheakIfStop (){



if (currentData.Team[0]&&currentData.Team[0].canAttack()==true){currentData.battle.nextAttacker=currentData.Team[0];  return true }
if (currentData.Team[1]&&currentData.Team[1].canAttack()==true){currentData.battle.nextAttacker=currentData.Team[1]; return true }
if (currentData.battle.Enemy[0]&&currentData.battle.Enemy[0].canAttack()==true){currentData.battle.nextAttacker=currentData.battle.Enemy[0]; return true }
if (currentData.battle.Enemy[1]&&currentData.battle.Enemy[1].canAttack()==true){currentData.battle.nextAttacker=currentData.battle.Enemy[1]; return true }

return false
}


   static shouldTeamStops(array, secondArray) {
    for (let i = 0; i <= array.length - 1; i++) {
        if ( array[i].Path >= 200) {
            currentData.battle.nextAttacker = array[i];
            console.log(array[i])
            return true
        }
    }
    for (let i = 0; i <= secondArray.length - 1; i++) {
        if (  secondArray[i].Path >= 200) {
            currentData.battle.nextAttacker = array[i];
            console.log(array[i])

            return true

        }
    }
    return false;
}


    static moveTick(array){
    array.map((element)=>(element.moveInBattle()))};
    static moveEntireBattle (){
    battle.moveTick(currentData.battle.Enemy)
    battle.moveTick(currentData.Team)
    }



}





    
 
     


export default battle