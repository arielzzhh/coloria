/*import adventure from "../../adventures/adventure";
import createItem from "../../Creation/createItem";
import { GearSets } from "../FrontEndData/gearSets";
import Map from "../../map/map";
import tile from "../../map/tile";
import adventureSerias from "../../adventures/adventureSerias";
import BulbSchemes from "../../Creation/BulbSchemes";
import { Location } from "../FrontEndData/HireData";
import objective from "../../adventures/Objective/objectives";
import { Npc } from "../FrontEndData/npc";
import EventMsg from "../../EventMsg/EventMsg";





//tuturial adventure 1
let firstTile = [0,0,new tile(true,['dsadads','StartingMsg',[]])]
let SecondTile = [0,4,new tile(true,['hellow and welcome to the game plase press on the Buttons so you could Move','StartingMsg',[]])]
let ThreeTile = [4,4,new tile(true,['you can keep Continue toward your Goal','StartingMsg',[]])]
export let tuturialMap2= new Map('movingTuturial',5,[0,0],[[1,0],[1,1],[1,2],[1,3],[2,0],[2,1],[2,2],[2,3],[3,0],[3,1],[3,2],[3,3],[4,0],[4,1],[4,2],[4,3]],[firstTile,SecondTile,ThreeTile],[],null)
let goToLocation1 =new objective ('go to 4,4','map',[tuturialMap2,'go',[4,4]],'map')
let adventureTuturial2 =new adventure('movment Tuturial',0,1,[ 'learn how to take an adventure ,for this choose your only bulb To Move ','in the adventure  learn The Basic of movment in map, ','you also learn also how to handle objective'],[1,1],[2,25],[['black',1]],[goToLocation1],0) ;




//tuturial adventure 3
let Sword = createItem.WeaponGearSet(0,GearSets[0])
let firstItemTile = [2,2,new tile(true,[[Sword,'chest']])]
let tuturialMap3 =new Map('ChestTuturial',7,[0,0],[[0,1],[0,2],[0,3],[0,4],[0,5]],[firstItemTile],[])  
let GainFirstItem = new objective('','item',[tuturialMap3,'gain',Sword])
let adventureTuturial3=new adventure('ChestTuturial',0,1,'here you will gain the basic ability to open Chsest',[1,1],[2,25],[['black',10]],[GainFirstItem],0);


let friendTeam = [Npc[1]]
let firstEvent = new EventMsg (['hellow and welcome','how is the game so far'],[['ok'],['ok'],['ok']],friendTeam,false)
let BattleTeam = BulbSchemes.CreateTeamLocation(Location[0],1)
let BattleTile =[4,4,new tile(true,[[BattleTeam,'battle']])]
let EventTile =[2,2,new tile(true,[[firstEvent]])]

let tuturialMap4 =new Map ('woodCuttingTuturial',10,[0,0],[],[BattleTile,EventTile],[],[])
let BattleObjective =new objective('kill','map',[tuturialMap4,'kill',BattleTeam],)
let TalkObjective =new objective('go talk with buka','map',[tuturialMap4,'EventMsg',firstEvent],)

let adventureTuturial4=new adventure ('Interacting',1,1,'kill a bulb,talk with a bulb',[1,3],[2,25],[['black',8],['red',4],['green',5],['blue',5]],[BattleObjective,TalkObjective],0)













  let tuturialMap5 =new Map('bulb Interact Tuturial',5,[0,0],[],[,BattleTile],[],[])
  let tuturialMap6 =new Map('Settlments',8,[0,0],[],[],[],[])
let adventureTuturial5=new adventure('Meet Interact with Other Bulbs',1,1,'here you will learn how to talk to other bulb and how',[1,1],[2,25],[['black',10]],[],[[tuturialMap5.Team,'Talk'],[tuturialMap5,BattleTile.Team,'Kill']],0)
let adventureTuturial6=new adventure('GetYourFirstSettlments',1,1,'Here You will Gain ',[1,3],[2,25],[['black',1],['red',1],['green',1],['blue',1]],[],[[tuturialMap6,'discover',50,[]]],0); 

 export let adventures =[adventureTuturial2,adventureTuturial3,adventureTuturial4,adventureTuturial5,adventureTuturial6]
 export let Tuturial = new adventureSerias('Tuturial',adventures,'Tuturial')
*/