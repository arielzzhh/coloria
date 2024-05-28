import Builduing from "./Builduing";
import { BuilduingInfo } from "../../../Data/FrontEndData/GameData";


export class House extends Builduing {
constructor(name,lvl,){
super(name,lvl);
this.resident=[];



this.BuildType =this.constructor.name


 }

capableToAdd(){
    
}





 housing(){
    return BuilduingInfo.HouseInfo.housing[this.lvl]

 }
 
}



export default House ;