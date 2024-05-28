import { currentData,SaveGame,} from "../Data/Data";
import adventureIo from "../adventures/adventureIo";
import DaysEvents from "../Data/DaysEvent";
import { AllBulbs,Allproprety} from "../Data/WorldData";
import bank from "../Bank/bank";
import option from "../option";


export class Day {


//   currentData.adventureData.standByAdventures.push(sharpBattle);

    static CantPassDayAdventures() {
        return !currentData.adventureData.adventureSearisActive.some((element, key) => {
            if (element.current()[0].status == true && element.current()[0].activeDay <= 0) {
                return true; // Return true if condition is met
            }
            return false; // Return false if condition is not met
        });
    }
 



    



static passDay (){
    currentData.roster.forEach((elment,index)=>{
        if(elment.activity[0]=='returning'){
            elment.activity[1]-=1;
            if(elment.activity[1]<=0){
                elment.activity='sitting'
            }
        }
    })
    currentData.AllBulbs.forEach((elment)=>{
        elment.DaySizeGrouth()
        if(currentData.Date.day%10==0){
            elment.keepInfo()
        }
        elment.dayTrain();


    }
)

 

/*Allproprety.forEach((elment)=>{
    elment.dayProprety();
})*/





bank.turnGain();

    currentData.Date.day++

   let NavigatorEvent = DaysEvents(currentData.Date.day);
    adventureIo.adventuresMoveFoward()
    option.saveGame()


}

}


export default Day