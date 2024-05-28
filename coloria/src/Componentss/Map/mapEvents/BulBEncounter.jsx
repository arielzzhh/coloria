import { Grid,Button, Stack, ButtonGroup, Typography} from "@mui/material"
import BImage from "../../Bulb/Images/BImage";
import { useNavigate } from "react-router-dom";
import battle from "../../../Script/battle/battle";
import { Link } from 'react-router-dom';
import { currentData } from "../../../Script/Data/Data";



export function BulBEncounter({tile,Events}){

    const navigate = useNavigate();

    return(<>
    

  {Events[0].map((elment,index)=>(<BImage key={index} bulb={elment} W={100}></BImage>) )}


  <br></br>

    
  <Button onClick={()=>{ currentData.battle.Enemy=Events[0];navigate('/battle') }} variant="contained">go to Battle</Button>

    </>)
}


export default BulBEncounter;