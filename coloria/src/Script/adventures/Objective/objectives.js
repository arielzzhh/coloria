import battle from "../../battle/battle";
import bank from "../../Bank/bank";
import { currentData } from "../../Data/Data";


export class objective {
    constructor(name,type,objective,link){
        this.name=name;
        this.objective=objective        //if battle is contained then it must be in the secend part 
        this.finished =false
        this.prize=[]
        this.linkLocation=link
    }   


    CheakObjective(){
        if(this.objective[1]=='gain'&&currentData.inventory.includes(this.objective[2])){
            return true
        }
        if(this.objective[1]=='kill'&&battle.TeamDead(this.objective[2]) ){   
            return true
        }

        //depnded on EventMsg
        if(this.objective[1]=='event'&&this.objective[2].finished) {   
            return true
        }



        else return false
    }







    finishObjective(){
        this.finished=true;
    }




    gainPrize(){
        this.prize.map((elment,index)=>{
            if(elment.constructor.name=='array'){
                bank.GainAmountOne(elment[0],elment[1]);
            }
            if(elment.isItem()){
                
            }
        })
    }



    isFinished(){
      let objective =this.objective
  

        if(objective[0]=='battle'){
            battle.TeamDead(objective[1])
        }

    }





}

export default objective ;