import { Stack, Typography } from "@mui/material";
import { currentData } from "../../Script/Data/Data";
//style={{backgroundColor:Background()}}
export function Objective({elment, index}){







    


    return(<Stack     direction={'row'} justifyContent={'space-evenly'}>
<Typography>{elment.name}</Typography>  


    </Stack>)
}


export default Objective;