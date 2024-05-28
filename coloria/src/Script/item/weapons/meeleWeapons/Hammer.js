import weapon from "../weapon";
import meeleWeapon from "./meeleWeapon";

export class Hammer extends meeleWeapon {
    constructor(name,value,rarity,description,color,pysical,perks){
        super(name,value,rarity,description,color,pysical,perks);
        this.nextAttack= 'HeadSmash'      // HeadSmash  HammerShield   
        this.HeadSmashState=0;
        this.target=null;

}



HeadSmash(user,target){
target.loseHp(user.pysicalDmg());
}


HammerShield(user){



    user.Effect.push(('hammerShield',3))
}


    

}



export default Hammer;