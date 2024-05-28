import { BuilduingInfo } from "../../../Data/FrontEndData/GameData";
import Builduing from "./Builduing";



export class WearHouse extends Builduing {
constructor(name,lvl){
super(name,lvl);



 }

 
 upgradeCost(){
    return BuilduingInfo.wearHouseInfo.Price[this.lvl]

 }

 storePrisim(){
    return BuilduingInfo.wearHouseInfo.housing[this.lvl]
 }

 storeItems(){
   return BuilduingInfo.wearHouseInfo.items[this.lvl]
}
 
}



export default WearHouse ;