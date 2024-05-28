import { currentData } from "../Data/Data";

export class AdventureSeries {
    constructor(name,adventureList,type) {
        this.name=name
        this.adventureList = adventureList;
        this.type=type;
        
    }











    current() {
     for (let i=0;i<=this.adventureList.length-1;i++){
     if(this.adventureList[i].finished==false){
        return  [this.adventureList[i],i]
     }
     else continue
    }



    }



    AddCurrentToTab(){
        currentData.adventureData.standByAdventures.push(this.current()[0])
        }
    
    
    
    
 






    


}







export default AdventureSeries