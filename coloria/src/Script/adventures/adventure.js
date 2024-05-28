import { currentData, } from "../Data/Data";
import bank from "../Bank/bank";
import { Location } from "../Data/FrontEndData/HireData";
import inventory from "../Handaling/inventory";
import battle from "../battle/battle";





export class adventure {
    constructor(name,rairity,lvl,description,restriction1x2,Days,Prize,objective1x3=[],locationIndex){
           //baic stuff
        this.name=name;
        this.rairity=rairity;
        this.lvl=lvl
        this.description=description
        this.restriction=restriction1x2;
    //all adventure has
    //days
    this.amountOfDay=Days[0]
    this.activeDay=Days[0];
    this.LastYear=Days[1]
    //reward 
    this.Prize=Prize;
    
    //status
    this.status=false //is on the run or not 
    this.finished=false //can take reward or not 
    this.Team=[]
    this.objectives=objective1x3  //which attributeTrigger ,secondOneIsObjective
    this.location=Location[locationIndex];
    this.requirmentToget =[];
    this.requirmentToTake=[];





    }


  





//returns 

//CheakObjective 

CheakObjectiveAfterMove() {
    let objectiveCoords = this.currentObjective().objective[2];
    let mapCoords = [this.currentMap().cord[0], this.currentMap().cord[1]];

    if (
        this.currentObjective().objective[1] === "go" &&
        objectiveCoords[0] === mapCoords[0] &&
        objectiveCoords[1] === mapCoords[1]
    ) {
    
        this.currentObjective().finishObjective();
        return true
    }
}


CheakObjectiveAfterBattle(){
    let objective = this.currentObjective().objective[1];
    let Team = this.currentObjective().objective[2];



    if(Team.constructor.name=='Array'&&battle.isTeam(Team)&&battle.TeamDead(Team)){
        this.currentObjective().finishObjective();

      return true 
    }







}




isNextObjectiveisInMap(){

    if(this.currentObjIndex()==-1){

        return false
    }

    else return true




}




//return




currentMap(){
    if(this.objectives[0].objective[0].constructor.name=='Map'){
        return this.objectives[0].objective[0]
}
}

currentObjIndex() {
    return this.objectives.findIndex((element, index) => {
        return element.constructor.name === 'objective' && element.finished === false;
    });
}

currentObjective(){
   if(this.currentObjIndex()!==-1){

    return this.objectives[this.currentObjIndex()]}


    else return null

    
}







activateMap(){
    if(this.objectives[0].objective[0].constructor.name=='Map'){
        currentData.map=this.objectives[0].objective[0];
    }

}


activateBattle(){

    if(this.objectives[0].objective[0]=='battle'){
        currentData.battle.Enemy=this.objectives[0].objective[1];
    }

}






setAdventure (){
    console.log(this.objectives[0].objective[1])
    currentData.adventure =this
    currentData.Team=this.Team;
    



   this.activateMap();
   this.activateBattle();

}










//adventure team handaling



activateAdventure(){
    this.status=true;


    currentData.pick.nextPicker.map((elment,key)=>{
        this.Team.push(currentData.roster[elment]);
        currentData.roster[elment].activity= 'traveling';
    })
}






startMap(){



currentData.Team =this.Team


}






clearTeam(){
    this.Team=[];
}

fillAdventure(){
    currentData.adventureData.nextPicker.forEach((elment,index) => {
        this.Team[index]=currentData.roster[elment];
    });
}



findIndex() {
    for (let i = 0; i < currentData.adventureData.standByAdventures.length; i++) {
      const adventures = currentData.adventureData.standByAdventures[i];
      if (
        adventures.name === this.name &&
        adventures.rairity === this.rairity &&
        adventures.lvl === this.lvl
        &&
        adventures.amountOfDay === this.amountOfDay
        &&
        adventures.objectives === this.objectives
        &&
        adventures.Team === this.Team
      ) {
        return i;
      }
    }
    return -1; // Return -1 if the car is not found in the array
  }



  removeFromAdventureList(){
    let index =currentData.adventureData.standByAdventures.findIndex((elment,index)=>{
        return elment==this
    })
    if(index !==-1){
    
        currentData.adventureData.standByAdventures.splice(index,1)
    
    }


  }



  GainPrize(){

    this.Prize.map((elment,index)=>{


          switch(true){
            case elment.constructor.name=='Array':
            bank.GainAmountOne(elment[0],elment[1])
            return true
            case elment.constructor.name=='Hammer':
            currentData.inventory.push(elment)
            return false

          }
    })

  }

  ChangeBulbToReturing(){
    this.Team.forEach((elment,index)=>{
        elment.activity=['returning',Math.floor(this.amountOfDay/2)]
        console.log(this.Team);
    })



    

  }






Finish(){
this.finished=true;

this.removeFromAdventureList();
this.GainPrize();



this.ChangeBulbToReturing();




currentData.adventure=null;
currentData.map=null;
currentData.battle.Enemy=null;

  

}








//gainItem



//adventure traveling
    passDayActive(){
        this.activeDay--;
    }
 
    amountLeft(){
        return  this.gettingDay-currentData.Date.day
    }



//adventure Resolving 


progress(){
    console.log(this.objectives[0])
    if ( this.objectives.length==0){
        this.finished=true;
        return 'progress'
    }
   


}











}


export default adventure