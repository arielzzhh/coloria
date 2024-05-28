import { useEffect } from "react"
import axios from "axios"
import { useState} from "react";
import OneBoeard from "./OneBoeard";
import Typography from '@mui/material/Typography'
export function LeadrboeardsPage (){
    const [information, setInformation] = useState(null);


    async function getData(){

        
        let information = await axios.get('http://localhost:8000/data/all')

        setInformation(information.data);
    }

    
    
    
    useEffect(()=>{
        getData()
        
             },[])
        


    return(<>
<Typography variant="h3" color="initial">topRank</Typography>
    {console.log(information)}

{information&&information.map((elment,index)=>(
<OneBoeard elment={elment}></OneBoeard>
))}
    
    
    </>)
}


export default LeadrboeardsPage