import { currentData } from "../Data/Data";
import adventure from "../adventures/adventure";
import bulb from "../bulb/bulb";
import Mat from "../util/Mat";
import createItem from "./createItem";
export class BulbSchemes {




   static HireBulb(location,weapon1x2=null){   //weapon-gearset/index
        let Bulb =new bulb([Mat.random(0,0),location.name],[location.Hirename[Mat.random(0,location.Hirename.length-1)],''],Mat.random(location.lvl[0],location.lvl[1]),[5,5],[15,15,15],[Mat.random(location.rgb[0][0],location.rgb[0][1]),Mat.random(location.rgb[1][0],location.rgb[1][1]),Mat.random(location.rgb[2][0],location.rgb[2][1])],['bow',1,5])

         if(weapon1x2!==null){
          BulbSchemes.EquipeGearSet(Bulb,weapon1x2[0],weapon1x2[1])
         }
        return Bulb
    }

   static CreateBaseBulb (name,rgbGene,rgb){
     return new bulb([Mat.random(0,0),'customMade'],[name,''],1,[5,5],rgbGene,rgb,['sword',2,30]);
   }



   static CreateTeamLocation(location,amount,GearsAmountx2=null){
    let Team =[]
    let Array =GearsAmountx2

    if(Array==null){
      Array=Mat.arrayNull();

    }




 
    
    for (let i=0;i<amount;i++){
      Team.push(BulbSchemes.HireBulb(location,Array[i]));

    }


    return Team


   }
 

   static EquipeGearSet(bulb,GearSet,weaponIndex){
    bulb.equipWeapon(createItem.WeaponGearSet(weaponIndex,GearSet))
    bulb.equipThreeArmor(createItem.ArmorGearSet(0,GearSet),createItem.ArmorGearSet(1,GearSet),createItem.ArmorGearSet(2,GearSet))
  
  }




}


export default BulbSchemes;