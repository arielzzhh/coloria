import { useState,useContext } from "react";
import { Grid,Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DaysCount from "./DaysCount";
import { currentData } from "../../../Script/Data/Data";
import adventure from "../../../Script/adventures/adventure";
import BImage from "../../Bulb/Images/BImage";
import { UserContext } from "../../../Router/Routing";




export function Status({adv,setTabiName,myData,updateData,index}){
    const [advo,setAdv]= useState(adv);
    const { data, update } = useContext(UserContext);



    const navigaotrs =useNavigate()


    //Progress();     currentData.adventure=adv  ;  

function Progress(){
    adv.progress();
}



function Finish(){
    adv.Finish();
    adv.removeAdventure()    
}


    switch (true){


        case (adv.status==true&&adv.activeDay<=0):
            return (<div> 


<div>

{adv.Team.map((elment,index)=>(
<BImage key={index} bulb={elment} W={35
}></BImage>
))}
</div> </div>)
    
     case (adv.status==true):
    return (<div>
        <div>

            {adv.Team.map((elment,index)=>(
<BImage key={index} bulb={elment} W={35
}></BImage>
))}



        </div>
        
        <DaysCount  W={250} Number={adv.activeDay}></DaysCount> <p style={{color:'silver'}}>Active</p> </div> )

    case (adv.status==false):
    return (<div>   <DaysCount W={150}  Number={adv.activeDay}></DaysCount>  <p style={{color:'silver'}}>notActive</p>
    </div> )
  
          



}
}

export default Status;