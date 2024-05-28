import { Grid,Button, Stack, ButtonGroup, Typography} from "@mui/material"
import LocationHire from "./LocationHire";
import GameData from "../../../../Script/Data/FrontEndData/GameData";
import BulbCreation from "../../../../Script/Creation/BulbSchemes";
import { Location } from "../../../../Script/Data/FrontEndData/HireData";


export function Hire ({update}){




    return(<Grid container  >
{Location.map((elment,key)=>(
    <Grid item xs={3}>  </Grid>
))}
   






    </Grid>)
}


export default Hire;