import adventure from "../../adventures/adventure";
import Map from "../../map/map";
import tile from "../../map/tile";
import adventureSerias from "../../adventures/adventureSerias";
import BulbSchemes from "../../Creation/BulbSchemes";
import { Location } from "../FrontEndData/HireData";
import EventMsg from "../../EventMsg/EventMsg";
import objective from "../../adventures/Objective/objectives";
import createItem from "../../Creation/createItem";
import Scene from "../../Scene/Scene"
import { GearSets } from "../FrontEndData/gearSets";
import { map } from "lodash";
import Settlement from "../../proprety/propretyTypes/Settlement";

let Apple= [7,5,new tile(true,[[createItem.StaticResource('Apple',2),'chest']])]
let Herb= [6,8,new tile(true,[[createItem.StaticResource('Herb',2),'chest']])]
let blueCrystal= [1,4,new tile(true,[[createItem.StaticResource('blueCrystal',2),'chest']])]

let wood= [2,0,new tile(true,['blackWood','worldObject',1])]
let wood1= [7,4,new tile(true,['blackWood','worldObject',2])]
let wood2= [7,7,new tile(true,['blackWood','worldObject',3])]
let wood3= [2,8,new tile(true,['blackWood','worldObject',4])]
let FirstScene =new Scene ([],)
let tamoAndSharkTalk = new EventMsg(['you suddenly ear a noise you have no idea what it can be','suddenly you here a word'],[[],['finish']],[null,],true)
let FirstBattle = [5,5,new tile(true,[[BulbSchemes.CreateTeamLocation(Location[0],1,[[GearSets[0],0]]),'battle']])]
 let eventTile = [0,1,new tile (true,[[tamoAndSharkTalk,'EventMsg']])]
export let firstMap = new Map('','10',[0,0],[[0,5],[3,0],[5,0],[7,0],[8,0],[0,3]],[FirstBattle,wood,wood1,wood2,wood3,eventTile,Apple,Herb,blueCrystal],[],null,[],[['black',100,1,0.55]])
let FirstObjective =new objective('look around you might find somthing good','talk',[firstMap,'event',tamoAndSharkTalk],)
export let FirstAdventure =new adventure('what is this place',1,1,['what the hell is this place','its seems i am a black gicantic bulb','i forgot everything','i hope i could find some clues nearby',],[1,1],[0,25],[],[FirstObjective],0)













let BlackForsetSearis = [FirstAdventure]


export let BlackForsetChapter = new adventureSerias('first Chapter',BlackForsetSearis,'main'); 