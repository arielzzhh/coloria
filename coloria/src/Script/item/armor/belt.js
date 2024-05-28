import armor from "./armor";



export class belt extends armor {
    constructor(name,value,rarity,description,color,pysical,perks,size=2){
        super(name,value,rarity,description,color,pysical,perks);
        this.size=size
    }




}


export default belt