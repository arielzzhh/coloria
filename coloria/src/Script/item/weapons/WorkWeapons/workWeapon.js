import weapon from "../weapon";

export class WorkWeapons extends weapon {
    constructor(name,value,rarity,description,color,pysical,perks){
        super(name,value,rarity,description,color,pysical,perks);
        this.condition =50;
        this.cost =3;
}











}

export default WorkWeapons;