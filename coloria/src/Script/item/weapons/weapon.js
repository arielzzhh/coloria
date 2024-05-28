import { premadeColor } from "../../Data/Data";
import  gear  from "../gear";
import item from "../item";




export class weapon extends gear {
    constructor(name,value,rarity,description,color,pysical,perks){
      super(name,value,rarity,description,color,pysical,perks);
      

    }


    isArmor(){
      return false 
  }
  
  isWeapon(){
      return true
  }



    attackDescription(){
      switch(this.nextAttack){
      case  'comboSword':
      return 'simple attack if attack target same twice with this attack gain stack ,each stronger then the one before    '
      case  'Trust':
      return 'Trust two front bulbs for huge dmg ,when used cunsume all stacks   '
  
  
      }
  }
  








}


export default weapon;