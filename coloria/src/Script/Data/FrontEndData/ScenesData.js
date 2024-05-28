import Scene from "../../Scene/Scene";
import story from "../../Scene/story";
import { currentData } from "../Data";


let campFire1x1= new Scene('black',"hellow","how are you", "i am ok how are you","i am ok and you")
let campFire1x2= new Scene('black',"hellow","how are you", "i am ok how are you","i am ok and you")
let campFire1x3= new Scene('black',"hellow","how are you", "i am ok how are you","i am ok and you")
let campFire1x4= new Scene('black',"hellow","how are you", "i am ok how are you","i am ok and you")

let campFire1=[campFire1x1,campFire1x2,campFire1x3,campFire1x4]



export let storyCamp1=new story(campFire1);