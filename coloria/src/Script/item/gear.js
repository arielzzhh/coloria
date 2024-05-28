import item from "./item";
import { premadeColor,returnPerk } from "../Data/Data";
import { findIndex } from "lodash";
import { gems } from "../Data/Data";



export class gear extends item {
    constructor(name,value,rarity,description,color,pysical){
        super(name,value,rarity,description)
    this.rgb = color
    this.pysical =pysical;
    this.perks =[]





     







    }







isGear(){
return true

}


addPerk (type,current,max){

    this.perks.push([type,current,max])
   }






AmountPerks(perkName) {

     

    let x = this.perks.findIndex((element) =>(element[0] === perkName))



if(x!=-1)
return this.perks[x][1]

else return 0
}

}



export default gear;