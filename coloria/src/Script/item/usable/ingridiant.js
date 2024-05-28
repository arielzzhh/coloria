import resource from "../resource/resource";


export class ingridiant extends resource {
    constructor(name,value,rarity,description,type,amount,useEffect){
    super(name,value,rarity,description,type,amount);
    this.useEffect=useEffect;   //
    
    }
}