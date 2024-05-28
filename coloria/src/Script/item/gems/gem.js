import item from "../item";

export class gem extends item {
    constructor(name,value,rarity,description,coreColor,power){
        super(name,value,rarity,description)
        this.coreColor=coreColor;
        this.power=power;
        this.spell =0;

 

}




}



export default gem