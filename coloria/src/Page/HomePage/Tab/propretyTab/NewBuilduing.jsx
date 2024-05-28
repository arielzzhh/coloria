import NewBuilduingSlot from "./NewBuilduingSlot";
import { Grid } from "@mui/material";



export function NewBuilduingTab ({proprety}){


    return(<>
    Build New Builuding 
    {proprety.possibleBuilduings().map((elment,index)=>(
       <NewBuilduingSlot key={index} elment={elment}></NewBuilduingSlot>

    ))}
    
    
    
    
    </>)
}



export default NewBuilduingTab ;