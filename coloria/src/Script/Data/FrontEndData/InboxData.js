import InboxMsg from "../../Inbox/InboxMsg";
import EventMsg from "../../EventMsg/EventMsg";
import { Npc } from "./npc";
import { Tuturial } from "../AdventureData/Tuturial";
import { BlackForsetChapter } from "../AdventureData/FirstChapter";
import { sherifStory } from "./npc";



let firstEvent =new EventMsg(['hellow and welcome to Coloria a fantasy online game based colors and tableTop games ','This is A bulb ,each bulb has few quirks ,gene,color,each bulb each bulb has a red value ,green value ,and blue values ,you can see the combined value ','how would you like to start your game ?','you just opend your first adventure ,press on the tent '],[[],[['gain Bulb',[]]],[]],[[],[],[]],true)
let firstMsg = new InboxMsg(null,'hello and welcome To Coloria',[""],[],firstEvent)




let meetTheSherrif =new InboxMsg(null,'welcome to our town',['i am the new sherrif in town ,as you probebly saw in the newspaper yesturday 2 bulbs known to the deprtment came and rob us ,that why i issued a life or death sequence whoes have found of life and death'],['adventure'],[null])





















let anonymusweirdMsg= new InboxMsg (null,'hellow friend',['hellow my friend nice to meet you','i heard you are very good in sending helping hends ,if you could help me i wish you could send me a bulb  ','i promise you i will send cash '],[['advntures']])




let inboxData =[anonymusweirdMsg,firstMsg,meetTheSherrif]




export default inboxData;