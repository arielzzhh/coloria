
import bank from "../../../Bank/bank";
import { currentData } from "../../../Data/Data";
import { BuilduingInfo } from "../../../Data/FrontEndData/GameData";
import { AllBuilduings } from "../../../Data/WorldData";


export class Builduing {
    constructor(name,lvl){
        this.name=name;
        this.lvl=lvl;
        this.status=[false,0];




currentData.AllBuilduings.push(this)
     
        

        
    }






 



    AmountOfDays(){
        switch(this.constructor.name){
        case'House':
        return BuilduingInfo.HouseInfo.Time[this.lvl]
        case'WearHouse':
        return BuilduingInfo.wearHouseInfo.Time[this.lvl]
        case'MineSystem':
        return BuilduingInfo.MineInfo.Time[this.lvl]
        case'TrainingField':
        return BuilduingInfo.TrainingInfo.Time[this.lvl]
        }
     }



     activateConstract(){
        this.status=[true,this.AmountOfDays()]
     }




     TryToUpgrade(){
        if(this.possibleToUpgrade()){
            bank.lowerAllAmount(this.upgradeCost())
        this.activateConstract();
        }
     }

     FinishUpgrade(){
        this.lvl++
     }







     stratImprovement(){

     }









    upgradeCost(){
        switch(this.constructor.name){
        case'House':
        return BuilduingInfo.HouseInfo.Price[this.lvl]
        case'WearHouse':
        return BuilduingInfo.wearHouseInfo.Price[this.lvl]
        case'MineSystem':
        return BuilduingInfo.MineInfo.Price[this.lvl]
        case'TrainingField':
        return BuilduingInfo.TrainingInfo.Price[this.lvl]
        }
     }

     possibleToUpgrade(){
      if(bank.CanIbuyAll(this.upgradeCost())){
        return true
      }

      else return false
    }







}

export default Builduing