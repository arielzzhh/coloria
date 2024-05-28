import { useState } from "react"
import EventOption from "./EventOption";

export function EventMsg({EventMsg}){   //dont add to EventMsg so there will alwaiz be optinal even outside 


    const [activeNum,setActiveNumber]=useState(0);
    
if(EventMsg!==undefined){

    return(<>
  <p>Event Eucuring</p>

  <p></p>


       <p>{EventMsg.msg[EventMsg.state]}</p>
  <EventOption EventMsg={EventMsg}  option={EventMsg.options[EventMsg.state]}></EventOption>





    
    </>)
}
}

export default EventMsg 