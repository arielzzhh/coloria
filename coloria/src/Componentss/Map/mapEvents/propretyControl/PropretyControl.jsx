import { Button } from "@mui/material"
import { useContext } from "react";
import { UserContext } from "../../../../Router/Routing";
import PropretyPreview from "../../../../Page/HomePage/Tab/Settelement/PropretyPreview";


export function PropretyControl ({tile,Events,map}){
    const { data, update } = useContext(UserContext);
    switch (true){

        




        case  (map.proprety.controller==null):
            return (<>
                <PropretyPreview elment={map.proprety} ></PropretyPreview>
                  you have here a proprety that seems to be with no owner .... you can take with no cost ,just make sure maintance wont make you broke
                <Button onClick={()=>{ map.takeMapProprety();update()}} fullWidth variant="contained"  >Take Claim</Button>

                
                  </>)
        case  (map.proprety.controller=='self'):
            return (<>
                <PropretyPreview elment={map.proprety} ></PropretyPreview>
        
           you control this proprety
            
            </>)

    }












}




export default PropretyControl