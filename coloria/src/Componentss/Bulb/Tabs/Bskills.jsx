import SkillBar from "../skill/SkillBar"
import { Typography,Stack } from "@mui/material";
export function Bskills({bulb}) {
    return (
        <>
  


{bulb.skills.map((element,index)=>(<SkillBar key={index} element={element}></SkillBar>))}






        </>
    );
}

export default Bskills;