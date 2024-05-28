import { currentData } from "../Data/Data"
import { WeaponCraft } from "../item/Craft"
import { ArmorCraft } from "../item/Craft"
import { etcCraft } from "../item/Craft"
import resource from "../item/resource/resource"
import arrow from "../item/resource/arrow"
import potion from "../item/usable/Potion"
import { ingridiant } from "../item/usable/ingridiant"



//[0/Sword, 1/Orb,2/WorkAxe,3/Pickaxe,4/Bow,5/sling,6/GiantSling,7/DualWield,8/Hammer,9/Katana]
//[0/hat,1/belt,2/jumper]


export class createItem {



  static weapon (number,name,value,rairaity,description,color,pysical,perks){
    let weapon =new WeaponCraft[number](name,value,rairaity,description,color,pysical,perks)
    return weapon
  }
  static armor (number,name,value,rairaity,description,color,pysical,perks){
    let armor =new ArmorCraft[number](name,value,rairaity,description,color,pysical,perks)
    return armor
  }


 static StaticResource(name,amount){
    switch (name){
      case 'blackWood':
        return  new resource(name,5,0,'black woods you can find in ','wood',amount)
      case 'greenWood':
        return  new resource(name,5,1,'basic black wood can be obtained by cutting woods in the blackwoods','wood',amount)
      case 'yellowWood':
        return  new resource(name,5,2,'basic black wood can be obtained by cutting woods in the blackwoods','wood',amount)
      case 'ironeOre':
        return new resource(name,5,0,'basic black wood can be obtained by ironeOre in the ironeOre','stone',amount)
        case 'Apple':
          return new ingridiant (name,4,0,'simple Red apple','ingridiant',amount,[['restorHp',5]])
          case 'Herb':
          return new ingridiant (name,4,0,'herb to resotre stamina','ingridiant',amount,[['restoreStamina',5]])
          case 'blueCrystal':
            return new ingridiant (name,4,0,'simple Red apple','ingridiant',amount,[['restoreMagica',5]])
  
    }
  }



  static ResourceType(name){
    if (name=='blackWood'||name=='greenWood'||name=='yellowWood'){ return 'wood'}

    return 'false'

  }
  
  static gainResource(name,amount){
    currentData.inventory.push(createItem.StaticResource(name,amount))

  }
  



static WeaponGearSet(number,GearSet){                           
let weapon =createItem.weapon(number,GearSet.weaponName,GearSet.WeaponValue,GearSet.rarity,GearSet.weaponName,GearSet.rgbWeapon,GearSet.weaponPisical,[])
return weapon
}
static ArmorGearSet(number,GearSet){  
  let armor =createItem.armor(number,GearSet.armorNames[number],GearSet.armorValue,GearSet.rarity,'base armor',GearSet.rgbArmor[number],GearSet.armorPisical[number],[])    
return armor
}



static GearSetRecepie (gearSet,type,number){
  switch(type){
    case 'weapon':
      return  createItem.WeaponGearSet(number,gearSet)
      case 'armor':
        return   createItem.ArmorGearSet(number,gearSet)
  }
}

static  createPotion (postionTeamplate,amount){
  switch(postionTeamplate){
  case 'smallHpPotion':
  return new potion (postionTeamplate,15,1,'smallHpPotion','potion',amount,[['restoreHp',20]],[])
  case 'MediumHpPotion':
  return new potion (postionTeamplate,15,2,'smallHpPotion','potion',amount,[['restoreHp',50]],[])
  case 'BigHpPotion':
  return new potion (postionTeamplate,15,3,'smallHpPotion','potion',amount,[['restoreHp',100]],[])
  }
}











static Arrow(type,amount){
  switch(type){
    case 'blackArrow':
      return new arrow (type,1,0,'basic blackwoodArrow',undefined,amount,[0,0,0]);
  }
}















}



export default createItem