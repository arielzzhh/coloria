import weapon from "../weapon";
import meeleWeapon from "./meeleWeapon";
import { currentData } from "../../../Data/Data";

export class DualWield extends meeleWeapon {
    constructor(name,value,rarity,description,color,pysical,perks){
        super(name,value,rarity,description,color,pysical,perks);
        this.nextAttack ='doubleSlash'   // doubleSlash    danceBlade windWhield
        this.charge =0
        this.activate=false

} 


doubleSlash(user,target){

    
    target.loseHp(user.physicalDmg()*0.75)

    setTimeout(()=>{ target.loseHp(user.physicalDmg()*0.75)},200)



    this.charge+=user.physicalDmg()*0.5


    user.Path=0;


}


danceBlade(user){
    user.Effect.push(['speedBuff',3])
    this.charge+=50
    user.Path=100;

}


windWhield(){

}





attack(user,index){
    if(this.nextAttack=='doubleSlash'){
        this.doubleSlash(user,currentData.Enemy[index])
    
    }
    
    if(this.nextAttack=='danceBlade'){
    this.danceBlade(user)
    }
    if(this.nextAttack=='windWhield'){
    
    }
    
    user.Path=0;
    
    }







}



export default DualWield;