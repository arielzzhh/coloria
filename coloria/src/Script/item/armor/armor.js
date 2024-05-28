import { premadeColor } from "../../Data/Data";
import gear from "../gear";
import item from "../item";


export class armor extends gear {
    constructor(name,value,rarity,description,color,pysical,perks){
        super(name,value,rarity,description,color,pysical,perks);
        
}

isArmor(){
    return true 
}

isWeapon(){
    return false
}
}




export default armor ;