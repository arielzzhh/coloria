import option from "../option";
import Map from "../map/map";
import Settlement from "../proprety/propretyTypes/Settlement";
import proprety from "../proprety/proprety/proprety";
import BulbSchemes from "../Creation/BulbSchemes";
import bulb from "../bulb/bulb";



export let currentData  =
{

//server Info 
bank:[0,0,0,0,0,0,0,0,0],
Date:{day:0,  maxDay:0},
roster :[],
proprety :[],  
 inventory:[],
 Inbox:[],
   AllBulbs:[],
   AllBuilduings :[],
   Allproprety :[],
   AllMaps :[],
   Team :[],
   adventure:null,
   map:null,
   adventureData :{standByAdventures:[], adventureSearisActive:[]},

  
    //trowingGrabage   //no need To save in server
    pick:{Proprety:0,Bulb:null,adventure:null,nextPicker:[],nextChangeIndex:0},
    battle:{Enemy:null,nextAttacker :null,battleLog:[], nextColor:0},
    Crafting:{
      Gear:[ /*[GearSets[0],'weapon',0],[GearSets[0],'armor',0]*/],
      supply:[]
      },
   }


export function savePiece (userid){
let object ={
   bank:currentData.bank,
   Date:[currentData.Date.day,currentData.Date.maxDay],
   roster:[currentData.roster],
   user_id:userid,



}









   return object
}







export let DeadInfo ={
   Log:['YOU BOUGHT','YOU DISCOVERD'],
   battle:[]
}






option.saveAllInfo()

let firstSettlment =new Settlement('blackHut',1,[],[])
let blackHut = new Map('black hut',5,[0,0],[],[],[],firstSettlment,[],[['black',100],['red',20],['green',20],['blue',20]])



currentData.proprety.push(blackHut)