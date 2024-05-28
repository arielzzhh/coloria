//weapons
//magic weapons
import Orb from "./weapons/magicWeapons/Orb";
//workStation 
import WorkAxe from "./weapons/WorkWeapons/WorkAxe";
import Pickaxe from "./weapons/WorkWeapons/Pickaxe";
//rangeWeapons
import Bow from "./weapons/RangeWeapons/Bow";
import sling from "./weapons/RangeWeapons/sling";
import GiantSling from "./weapons/RangeWeapons/GiantSling";
//meeleWeapons
import DualWield from "./weapons/meeleWeapons/DualWield";
import Hammer from "./weapons/meeleWeapons/Hammer";
import Katana from "./weapons/meeleWeapons/katana";
import Sword from "./weapons/meeleWeapons/Sword";
//armor
import hat from "./armor/hat";
import belt from "./armor/belt";
import jumper from "./armor/jumper";
//rescusce 
import resource from "./resource/resource";




let magicWeapons = [Orb];;
let workStATION =[WorkAxe,Pickaxe];;
let rangeWeapons =[Bow,sling,GiantSling];
let meeleWeapons =[Sword,DualWield,Hammer,Katana]
export let WeaponCraft = [Sword,DualWield,Hammer,Bow,WorkAxe,Pickaxe,sling,GiantSling,DualWield,,Katana]
export let ArmorCraft =[hat,belt,jumper]
export let GearCraft =[hat,belt,jumper,Orb,WorkAxe,Pickaxe,Bow,sling,GiantSling,Sword,DualWield,Hammer,Katana]
export let etcCraft =[resource]




export let allCraft =[WeaponCraft,ArmorCraft,etcCraft]


//[0/Sword, 1/Orb,2/WorkAxe,3/Pickaxe,4/Bow,5/sling,6/GiantSling,7/DualWield,8/Hammer,9/Katana]


