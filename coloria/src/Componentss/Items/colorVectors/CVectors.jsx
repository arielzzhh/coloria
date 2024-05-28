import { Stack } from "@mui/material";
import CVector from "./CVector";


export function CVectors ({vectors,direction}){




    


    return(<Stack direction={direction} justifyContent={'center'}>



    {vectors.map((elment)=>(
            <CVector amount={elment[1]} color={elment[0]}></CVector>

    ))}






    
    
    </Stack>)
}


export default CVectors ;