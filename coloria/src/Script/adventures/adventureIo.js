import adventure from "./adventure";
import { currentData } from "../Data/Data";




export class adventureIo{


    static adventuresMoveFoward(){
        currentData.adventureData.adventureSearisActive.map((elment)=>{
            if (elment.current()[0].status){elment.current()[0].passDayActive()}
        
         }) 



         currentData.adventureData.standByAdventures.map((elment)=>{
            if (elment.status){elment.passDayActive()}
        
         }) 
          }





static gainAdventureSerias(adventureSerias){
    currentData.adventureData.adventureSearisActive.push(adventureSerias)

}

 







   


      


   




}






export default adventureIo