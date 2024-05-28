import BImage from "../Images/BImage"
import { Paper, Stack,Select,MenuItem,Button } from "@mui/material";
import bulb from "../../../Script/bulb/bulb";
import SsidChartTwoToneIcon from '@mui/icons-material/SsidChartTwoTone';
import TrainingOption from "./TrainingOption";


export function Tbulb ({setTabiName,bulb,onclick}){
    return(<Stack onClick={onclick} style={{border:'black solid 2px'}}  direction={'row'} justifyContent={'space-evenly'} spacing={4}    >
<BImage W={'10%'} bulb={bulb} ></BImage>

<div>
<p>{bulb.name[0]}</p>
<p>{bulb.name[1]}</p>
</div>



<div>
    <p>age</p>
<p >{bulb.age()}</p>
<p>{bulb.ageGroup()}</p>

</div>



<p>{bulb.activity}</p>

 



<TrainingOption bulb={bulb}></TrainingOption>






        
    
    
    </Stack>)
}



export default Tbulb