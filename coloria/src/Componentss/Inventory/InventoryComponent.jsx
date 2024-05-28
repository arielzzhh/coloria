import { useState,useContext } from "react"
import { Stack,Grid } from "@mui/material";
import Item from "../../Components/Items/Item";
import { UserContext } from "../../Router/Routing";


export function  InventoryComponent ({indexed}){
    const { data, update } = useContext(UserContext);
    const [showItem,setShowItem]= useState(0)




    return (<>
    
    <Grid container direction={'row'} spacing={1} >
    

      {data.inventory.map((elment,key)=>(
         


 
         
<Grid item xs={3} >
<Item   onClick={()=>{indexed(key) }    }  direction={'column'}   key={key+'s'} itemShown={elment}></Item> 

</Grid>))}







       



    </Grid>   
    
    </>)
}




export default InventoryComponent; 








