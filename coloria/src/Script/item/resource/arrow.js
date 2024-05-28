import resource from "./resource";
import { currentData } from "../../Data/Data";

export class arrow extends resource {
    constructor(name,value,rarity,description,type='arrow',amount,rgb){
        super(name,value,rarity,description,type,amount);
        this.type='arrow'
        this.rgb=rgb

    }

Stack (inventoryIndex){
    if( 
this.type ==currentData.inventory[inventoryIndex].type &&
this.name ==currentData.inventory[inventoryIndex].name &&
this.rarity ==currentData.inventory[inventoryIndex].rarity 
    ){


        this.amount +=currentData.inventory[inventoryIndex].amount 


    currentData.inventory.splice(inventoryIndex,1)




    }

}

}




export default arrow

