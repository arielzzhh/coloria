import BulbSlot from "./BulbSlot"
import { UserContext } from "../../Router/Routing"
import { useContext } from "react"
import roster from "../../Script/Handaling/roster";


export function TeamSlot({Number}) {
    const { data, update } = useContext(UserContext);



switch (true){
case (Number[0]<=data.pick.nextPicker.length&&Number[1]>=data.pick.nextPicker.length):return (
    <>
   {data.pick.nextPicker.map((elment,key)=>(
    <BulbSlot onClick={()=>{roster.DeletePickedSlot(key);update();}} element={data.roster[elment]} index={key} key={key}></BulbSlot>
   )
    


   )}
    
    </>
)
case (Number[1]<data.pick.nextPicker.length):return( <>'too much picked'</>)
}




 




}


export default TeamSlot