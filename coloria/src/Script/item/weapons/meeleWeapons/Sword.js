import weapon from "../weapon";
import meeleWeapon from "./meeleWeapon";
import { currentData } from "../../../Data/Data";

export class Sword extends meeleWeapon {
    constructor(name,value,rarity,description,color,pysical,perks){
        super(name,value,rarity,description,color,pysical,perks);
        this.nextAttack= 'comboSword'      // comboSword  Trust 
        this.stack=0;
        this.target=null;
}
//comboSword



comboSwordMulty(){
    return [1,1.1,1.2,1.3,2,3];
   
    }

comboSwordPath(){
    return [0,25,50,75,150]

}


 static   Trust(){
        return [1.2,1.4,1.6,2,3];
    }


 ComboDmgPreview(user,target){
if(this.target==target){
    return  user.physicalDmg()*this.comboSwordMulty()[this.stack].toFixed()
}
if(this.target!==target){
    return  user.physicalDmg()*this.comboSwordMulty()[0].toFixed()
 }

 }
 trustDmgPreview(user){
   return user.physicalDmg()*Sword.Trust()[this.stack].toFixed()
 }





    



comboSword(user,target){
    target.loseHp(this.ComboDmgPreview(user,target));


   if(this.target==target){

    this.stack++


    if (this.stack==5){
        this.stack=0
    }

    

   } 

   if(this.target!==target){
    this.stack=0
    this.target=target

   }
    
  

}



attack(user,index){
if(this.nextAttack=='Trust'){
    if (currentData.battle.Enemy[0]){currentData.battle.Enemy[0].loseHp(user.trustDmgPreview)}
    if (currentData.battle.Enemy[1]){currentData.battle.Enemy[1].loseHp(user.trustDmgPreview)}
    user.Path=0;
    this.stack=0


}

if(this.nextAttack=='comboSword'){
    this.comboSword(user,currentData.battle.Enemy[index])
    user.Path=this.comboSwordPath()[this.stack]

}







}



}





export default Sword;