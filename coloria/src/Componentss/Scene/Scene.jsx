import BulbScene from "./BulbScene"
import { Grid,Rating,Button } from '@mui/material';
import { currentData } from "../../Script/Data/Data";
import { useState } from "react";

export function Scene ({Scene}){



    if (Scene!==null){


    return(<>
    <svg viewBox="0 0 400 400" width={'400px'} style={{backgroundColor:'silver'}}>

{Scene.actors.map((element) => (
    <BulbScene text={element[3]} cx={element[1]} cy={element[2]}>  </BulbScene>
))}



    </svg>


    <Button  style={{width:'400px'}}>Advenced</Button>
    
    
    
    
    </>)}
}


export default Scene