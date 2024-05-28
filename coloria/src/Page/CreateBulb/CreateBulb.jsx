import { FormControl,TextField,Stack, Typography ,useFormControl,Slider} from "@mui/material"
import { useState } from "react"
import { currentData } from "../../Script/Data/Data"



export function CreateBulb (){
    const [bulb,setBulb]= useState(currentData.Team[0])

{}

return(<FormControl>
        <Typography variant="h6" color="initial">CreateNewBulb</Typography>
        <Typography variant="h6" color="initial">name</Typography>
        <Stack direction={'row'}><TextField label='name'>a</TextField>
        <TextField label='nickName'>a</TextField>
       <TextField label='lastName'>a</TextField></Stack>
       <Stack direction={'row'} >   <Slider style={{color:'red'}}  />
       <Slider style={{color:'green'}}  />
       <Slider style={{color:'blue'}}  /></Stack>



    </FormControl>)
}



export default CreateBulb