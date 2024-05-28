import { Button } from "@mui/material";
import adventure from "../../../../Script/adventures/adventure";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../Router/Routing";
import { useContext } from "react";
import { currentData } from "../../../../Script/Data/Data";
import adventureIo from "../../../../Script/adventures/adventureIo";
import objectiveHandle from "../../../../Script/adventures/Objective/objectiveHandle";


export function Resolve ({adv,setTabiName}){ 
    const { data, update } = useContext(UserContext);

//  adv.objectives[0] the first size of objective



    const naviagor =useNavigate();



switch (true){
case(adv.objectives.length==0):
return (<Button onClick={()=>{adv.Finish();setTabiName('') }} variant="contained">Finish Adventure</Button>)
case(adv.objectives[0]&&adv.objectives[0].objective&&adv.objectives[0].objective[0]=='battle'):
return (<Button onClick={()=>{adv.setAdventure();  ;naviagor('/battle')}} variant="contained">battle</Button>)
case(adv.objectives[0].objective[0].constructor.name =='Map'):
return (<Button onClick={()=>{adv.setAdventure(); naviagor('/map')}} variant="contained">Continue To Adventure</Button>)


}
    










    
    
  
}



export default Resolve;
