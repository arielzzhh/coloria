import  { useState } from "react";
import { Paper, Stack } from "@mui/material";
import BImage from "./Images/BImage";
import bulb from "../../Script/bulb/bulb";
import { Sword } from "lucide-react";
import { Shield } from "lucide-react";


export function BulbMenuBar({ bulb }) {
  const [bulbi, setBulbi] = useState(bulb);

  return ( 
    <Stack>
    {console.log(bulb)}
    <Paper style={{fontSize:'2em'}} variant={'elevation'} >{  bulb.name[0]+bulb.age}</Paper>
    <BImage bulb={bulb} W={350}></BImage>

    <Sword style={{width:'100px', height:'100px'}} />
    <Shield style={{width:'100px', height:'100px'}}/>
    <Stack direction={'row'} justifyContent={'space-evenly'}>
    <Shield style={{width:'100', height:'100' ,fill:'red' ,stroke:'darkred'}}/>
    <Shield style={{width:'100', height:'100' ,fill:'green' ,stroke:'darkgreen'}}/>
    <Shield style={{width:'100', height:'100' ,fill:'blue' ,stroke:'darkblue'}}/>

    </Stack>
    
    </Stack>
  );
}

export default BulbMenuBar;



