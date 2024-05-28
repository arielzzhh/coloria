import adventure from "../../adventures/adventure";
import AdventureSeries from "../../adventures/adventureSerias";
import Map from "../../map/map";
import tile from "../../map/tile";
import BulbSchemes from "../../Creation/BulbSchemes";
import { Location } from "../FrontEndData/HireData";


//first battle


//firstBattle 


let battleTeam=BulbSchemes.CreateTeamLocation(Location[0],2)





 let fastBattle =new adventure('simpleBattle',1,1,'simple battleLocation',[3,3],[0,15],[],[],[['battle',battleTeam]],[])



let battleTile =new tile(true,[battleTeam,'battle'])
let battleMap =new Map('basicBattleTile',5,[1,1],[],[[2,2,new tile(true,[battleTile,'battle'])]],[],[],[])
let AdventureBattle =new adventure('simpleBattle',1,1,'simple battleLocation',[3,3],[0,15],[],[],[[battleMap,battleTeam,'kill']],[])













let adventures =[fastBattle,AdventureBattle]

export let TheDarkTribeChapter = new AdventureSeries(adventures,'side')