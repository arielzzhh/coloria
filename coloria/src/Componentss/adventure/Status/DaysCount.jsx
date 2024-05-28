import { Stack } from "@mui/material";

export function DaysCount ({Number,text,W}){



    return(<Stack direction={'row'} justifyContent={'center'} ><p style={{fontSize:'1.7em'}} >{text}</p>   

    <svg viewBox="0  0 100 100" width={W}>   
        <circle cx={50} cy={50} r={35} fill={'white'}></circle>
        <text fontSize={'4em'} textAnchor="middle"  x={50} y={70}>{Number}</text>
        
        
         </svg>
    
    
    
    
    </Stack>





    )
}

export default DaysCount ;