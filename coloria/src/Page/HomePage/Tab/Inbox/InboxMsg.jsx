import { currentData } from "../../../../Script/Data/Data";
import MsgList from "./MsgList";
import EventMsg from "../../../../Components/Event/EventMsg";

export function InboxMsg ({Index}){


    if(currentData.Inbox[Index].EventMsg==null){
    return (<>
       <div>
       <h1 style={{}}>{currentData.Inbox[Index].title}/   </h1>

       <h4 style={{}}>{currentData.Inbox[Index].msg}/   </h4>



       </div>
    
    
    
    </>)}
    





if (currentData.Inbox&&currentData.Inbox[Index]&&currentData.Inbox[Index].EventMsg.finished==true){
    return(<>allReady finish Event</>)
}






    if (currentData.Inbox&&currentData.Inbox[Index]!==undefined&&currentData.Inbox[Index].EventMsg.finished==false){

        return(<>

<p>{currentData.Inbox[Index].title}   </p>
<MsgList msg={currentData.Inbox[Index]}></MsgList>
<div style={{backgroundColor:'silver'}}>
<EventMsg EventMsg={currentData.Inbox[Index].EventMsg}> </EventMsg>
</div>
 </>)  }











else return (<></>)

   
}



export default InboxMsg ;