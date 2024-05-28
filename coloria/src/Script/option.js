
import { json } from "react-router-dom";
import { currentData } from "./Data/Data"
import bulb from "./bulb/bulb";
import Settlement from "./proprety/propretyTypes/Settlement";




export class option {

    







static saveAllInfo (){
    let Object = currentData;
return Object
}



static startNewGame(){
    currentData.AllBulbs=[];
    currentData.AllBuilduings=[];
    currentData.Allproprety=[];
    currentData.AllMaps=[];
    currentData.bank=[100,0,0,0,0,0,0,0,0];
    currentData.Date={day:0,  maxDay:100};
    currentData.roster=[new bulb ([0,Location[0]],['red','champion'],50,[8,8,8,8,8],[10,0,0],[100,0,0],[]),new bulb ([0,Location[0]],['red','champion'],50,[8,8,8,8,8],[10,0,0],[100,0,0],[])]
    currentData.proprety=[];
    currentData.Inbox=[];
    currentData.Team=[];





}







static saveGame(index){
     localStorage.setItem(`save${index}`,JSON.stringify(option.saveAllInfo()));


}


static objectJson (index){
    let dataObject =  JSON.parse(localStorage.getItem(`save${index}`))
    return dataObject
}






static loadGame(index){
    let newData =  JSON.parse(localStorage.getItem(`save${index}`))




currentData.AllBuilduings =newData.AllBuilduings
currentData.Allproprety =newData.Allproprety
currentData.AllMaps =newData.AllMaps
currentData.AllMaps =newData.AllMaps


//spesific info
    currentData.bank=newData.bank
    currentData.Date=newData.Date
    currentData.roster=newData.roster
    currentData.Team=newData.Team




//active




}



}



export default option