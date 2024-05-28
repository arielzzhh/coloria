import weapon from "../weapon.js";
import  rangeWeapon  from "./rangeWeapon.js";
import createItem from "../../../Creation/createItem.js";

export class Bow extends rangeWeapon {
    constructor(name,value,rarity,description,color,pysical,perks){
        super(name,value,rarity,description,color,pysical,perks);
        this.quiever= createItem.Arrow('blackArrow',15);


        this.nextAttack ='ShootArrow';   //ShootArrow   PowerShot  SpredShot

        this.charge=0;    
}
powerShotMulty(){
    return [1.5,1.2,1.5,2,3]
}
SpredShotMulty(){
    return [1,2,4,6]
}




//previews


arrowPreview(user){
    return user.physicalDmg()}

PowerShotPreview(user){
    console.log(user.physicalDmg())
    console.log(this.powerShotMulty()[this.charge])

   return user.physicalDmg()*this.powerShotMulty()[this.charge]

}

preview(user){
    if(  this.nextAttack =='PowerShot'){
    return  this.PowerShotPreview(user) }
    if(  this.nextAttack =='ShootArrow' || this.nextAttack =='SpredShot'  ){
    return  this.arrowPreview(user)}
}



















attack(user,Target){
    switch (this.nextAttack){
        case 'shootArrow':
        this.charge++
        Target.loseHp(this.preview(user))
        return ''

        case 'PowerShot':
        Target.loseHp(this.preview(user))

        this.charge=0
        return ''


        case 'SpredShot':
        Target.loseHp(this.preview(user))
        this.charge=0
        return ''
            
        
  





    }
}




}






















    





export default Bow;