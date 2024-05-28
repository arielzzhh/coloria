import { currentData} from "../Data/Data"

export class roster {




  static maxRoster (){
    return 10
  }







  static DeletePickedSlot(mumber){
    currentData.pick.nextPicker.splice(mumber,1)
  }







  



  static startingSlot(){
    let startingSlots=[];




    currentData.roster.map((elment,key)=>{
      if(startingSlots.length<currentData.pick.adventure.restriction[0]){

        if (elment.available()&&!elment.picked(key)){
          startingSlots.push(key)
        }
      
      }
  
  
    
    })




currentData.pick.nextPicker=startingSlots

    return startingSlots
  }






  static addIndex(number,max,index){


    if(currentData.pick.nextPicker.length<max){
      currentData.pick.nextPicker.push(number);
    }

    if(currentData.pick.nextPicker.length==max){
      currentData.pick.nextPicker[max-1]=(number);
    }



  } 


  static addNextPossible 











static gainBulb(bulb){
  currentData.roster.push(bulb)
}




  static  updateTraveling (){
    currentData.pick.nextPicker.forEach((elment)=>{
        currentData.roster[elment].activity  ='traveling'
 })
  } 

  static SendToAdventure(){
    roster.updateTraveling();
  } 
  








}













export default roster