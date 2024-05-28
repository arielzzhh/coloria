
import { Button, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import option from "../../Script/option";
import { currentData } from "../../Script/Data/Data";
import CVector from "../Items/colorVectors/CVector";
import bank from "../../Script/Bank/bank";
import BImage from "../Bulb/Images/BImage";


export function SaveOption ({index}){

const navigator =useNavigate();
 return(<div><Stack direction={'row'} justifyContent={'space-evenly'}>
    <Stack direction={'row'} justifyContent={'space-evenly'}>
    <Button variant="contained"  onClick={()=>{navigator('/game');option.loadGame(index)}}> load</Button> 
 <Typography variant="h6" color="initial"> save: {index}</Typography>
 <Button variant="contained" onClick={()=>{navigator('/game');option.saveGame(index)}}> save</Button>
    </Stack>


 <Stack direction={'row'}>
    {option.objectJson(index)!==null&&option.objectJson(index).bank.map((elment,index)=>(
      <>
        <CVector color={bank.NumberBank(index)} amount={elment} ></CVector>
      </>  
    ))}
 </Stack>

 <Stack direction={'row'}>
    {option.objectJson(index)!==null&&option.objectJson(index).roster.map((elment,index)=>(
      <>
      {console.log(elment)}
      <BImage W={100}  bulb={elment}></BImage>
      {}
      </>  
    ))}
 </Stack>
 <Button >SaveToServer</Button>

 
 </Stack>


 
 
 
 </div>
)
}


export default SaveOption 