import { currentData } from "../Data/Data";


export class DataManipulate{


static Save (){
 localStorage.setItem('ActiveSave',currentData);
}

static load (){
    currentData=localStorage.getItem('ActiveSave');

}




static startSlotNumber(minRestriction){

}








    
static changePicker (index){
    currentData.adventureData.nextPicker[currentData.adventureData.nextChange]=index;
}





















static isAvailbleForPick(number){
let currentPicked =[2,3,1,6,7];
if (currentPicked.includes(number)){
  return false
}

else {
  if(currentData.roster[number].status=='sitting'){

  }
}
















}









}








export default DataManipulate;
