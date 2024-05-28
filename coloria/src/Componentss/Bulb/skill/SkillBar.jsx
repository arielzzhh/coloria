import { Stack, Typography,Rating } from "@mui/material";

export function SkillBar ({element}){

    return(<Stack style={{backgroundColor:"green", height:'7vh'}} alignItems={'center'}  direction={'row'} justifyContent={'space-evenly'}>
        <Typography >{element[0]}</Typography>
        <Rating   value={element[1]} readOnly max={15}> skillAmountMax</Rating>
        <Typography>experiance : {element[2]}</Typography>
        
    </Stack>)
}


export default SkillBar;