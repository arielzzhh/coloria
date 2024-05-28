import item from "../item";
import GameData from "../../Data/FrontEndData/GameData";


export class resource extends item {
    constructor(name,value,rarity,description,type,amount){
        super(name,value,rarity,description);
        this.type=type;   //   types can be   //stones //ores //woods    
        this.amount=amount
}


isGear(){
    return false
}










}


export default resource ;