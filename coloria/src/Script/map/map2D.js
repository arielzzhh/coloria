import Map from "./map";
import { currentData } from "../Data/Data";

export class map2D {
constructor(ArrayMaps){
    this.maps =ArrayMaps
    this.currentMapIndex =0
    this.CanMoveFoward=false




}


activateThisMap (team){
    currentData.adventure =this
    currentData.Team =team   //vv

    currentData.Map=this.maps[this.currentMapIndex];

    
}
















}


export default map2D