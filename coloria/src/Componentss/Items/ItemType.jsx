//gear   //Orb,WorkAxe,Pickaxe,Bow,sling,GiantSling,Sword,DualWield,Hammer,Katana
import Belt from "./weapons/Belt";
import Hat from "./weapons/Hat";
import Jumper from "./weapons/Jumper";
//weaon
import Sword from "./weapons/Sword";

import Orb from "./weapons/Orb";
import Bow from "./weapons/Bow";
import DualWield from "./weapons/DualWield";
import GiantSling from "./weapons/GiantSling";
import Hammer from "./weapons/Hammer";
import Katana from "./weapons/Katana";
import Pickaxe from "./weapons/Pickaxe";
import Sling from "./weapons/Sling";
import WorkAxe from "./weapons/WorkAxe";

//rescoursce
import Arrow from "./weapons/Arrow";
import Wood from "./weapons/Wood";
import Stone from "./weapons/Stone";
import Potion from "./weapons/Potion";
export function ItemType({ itemShown }) {





  if (itemShown){



    switch (true){
      case itemShown.constructor.name=='Sword':
      return (<Sword></Sword>)
      case itemShown.constructor.name=='Orb':
      return (<Orb></Orb>)
      case itemShown.constructor.name=='Bow':
      return (<Bow></Bow>)
      case itemShown.constructor.name=='DualWield':
      return (<DualWield></DualWield>)
      case itemShown.constructor.name=='GiantSling':
      return (<GiantSling></GiantSling>)
      case itemShown.constructor.name=='Hammer':
      return (<Hammer></Hammer>)
      case itemShown.constructor.name=='Katana':
      return (<Katana></Katana>)
      case itemShown.constructor.name=='Pickaxe':
      return (<Pickaxe></Pickaxe>)
      case itemShown.constructor.name=='sling':
      return (<Sling></Sling>)
      case itemShown.constructor.name=='WorkAxe':
      return (<WorkAxe></WorkAxe>)
      case itemShown.constructor.name=='belt':
      return (<Belt></Belt>)
      case itemShown.constructor.name=='hat':
      return (<Hat></Hat>)
      case itemShown.constructor.name=='jumper':
      return (<Jumper></Jumper>)
      case itemShown.constructor.name=='arrow':
      return (<Arrow></Arrow>)
      case (itemShown.constructor.name=='resource'&& itemShown.type=="wood"):
        return (<Wood></Wood>)
        case (itemShown.constructor.name=='resource'&& itemShown.type=="stone"):
          return (<Stone></Stone>)
          case (itemShown.constructor.name=='potion'):
            return (<Potion></Potion>)
      
    
  
            
  
  
  
  
    
  
  
  }



  }



 

   
}

export default ItemType;