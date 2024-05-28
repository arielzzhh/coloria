import ButtonOption from "./EventsOption.jsx/ButtonOption"
import { Button } from "@mui/material"
import { useContext } from "react"
import { UserContext } from "../../Router/Routing"

export function EventOption ({EventMsg,option}){
    const { data, update } = useContext(UserContext);




    if(option.length==0){
return(<>  <Button variant="contained" onClick={()=>{EventMsg.passOne();update();}}>ok</Button>  </>)

    }




return (
    <>
    {option.map((elment,index)=>(
        <ButtonOption update={update} EventMsg={EventMsg} elment={elment}></ButtonOption>
        


    ))}
    
    </>
)



}



export default EventOption