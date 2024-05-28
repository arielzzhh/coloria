import { Grid,Button, Stack, ButtonGroup, Typography,Box,Card,CardContent,CardActions} from "@mui/material"
import bank from "../../../../Script/Bank/bank"
import { Circle } from "@mui/icons-material"
import roster from "../../../../Script/Handaling/roster"
import { currentData } from "../../../../Script/Data/Data"
import BulbSchemes from "../../../../Script/Creation/BulbSchemes"
import CVectors from "../../../../Components/Items/colorVectors/CVectors"

export function LocationHire ({elment,myData,setTabiName,update}){
function TryToHire(){
  if (bank.CanIbuyAll(elment.Price)){
    bank.lowerAllAmount(elment.Price)
currentData.roster.push(BulbSchemes.HireBulb(elment))
  }
}


  return (<Card  >

<CardContent>
<Typography  gutterBottom  component="div">{elment.name}</Typography>
</CardContent>

{console.log(elment.rgb[0][0])}

<p>ability</p>
<CVectors direction={'row'} vectors={[['red',elment.rgb[0][0]+'/'+elment.rgb[0][1]],['green',elment.rgb[1][0]+'/'+elment.rgb[1][1]],['blue',elment.rgb[2][0]+'/'+elment.rgb[2][1]]]}></CVectors>

<p>Potantial</p>
<CVectors direction={'row'} vectors={[['red',5+'/'+10],['green',5+'/'+10],['blue',5+'/'+10]]}></CVectors>


 

  <CardActions>

        <Button fullWidth onClick={()=>{TryToHire();update()}} size="small" color="primary">
        <p>price :</p>
        <CVectors vectors={elment.Price}></CVectors>

        </Button>
      </CardActions>
  
  
  
  
  </Card>)

}


export default LocationHire