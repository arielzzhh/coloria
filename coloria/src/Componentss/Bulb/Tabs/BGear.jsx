import { Stack ,Grid} from "@mui/material";
import weapons from '../../../Script/item/weapons/weapon'
import { Data } from "../../../Script/Data/Data";
import bulb from "../../../Script/bulb/bulb";
import SvgItem from "../../Items/Item";
import { useState } from "react";
import SvgItemInfo from "../../Items/SvgItemInfo";
import BulbStats from "./BulbStats";
import { Sword } from "lucide-react";
import { Shield } from "lucide-react";
import { Box } from "lucide-react";
import { Loader } from "lucide-react";

export function BGear({bulbi}) {



    /*  
     <SvgItemInfo itemShown={bulbShown.headGear} W={300}></SvgItemInfo>
    <SvgItemInfo itemShown={bulbShown.belt} W={300}></SvgItemInfo>
    <SvgItemInfo itemShown={bulbShown.jumper} W={300}></SvgItemInfo>
    
    
    
      <Grid item xs={6}> <Loader color="yellow" size={48} />{bulbi.criticalChance()}</Grid>
      <Grid item xs={6}><Loader size={48}  color="orange" />{bulbi.criticalPower()}</Grid>
    
    
    */



    return (



      <Stack direction={'column'}>  <Stack spacing={2} direction={'row'}>
       {console.log(bulbi)}

       <Stack direction={'row'} width={'100%'} justifyContent={'space-evenly'}>
       <SvgItemInfo itemShown={bulbi.weapon} W={200}></SvgItemInfo>
    <SvgItemInfo itemShown={bulbi.headGear} W={200}></SvgItemInfo>
    <SvgItemInfo itemShown={bulbi.belt} W={200}></SvgItemInfo>
    <SvgItemInfo itemShown={bulbi.jumper} W={200}></SvgItemInfo>



       </Stack>
   
        
      
       
        
        </Stack>
 
       <Grid container fontSize={'48px'}>
        <Grid title={'pysicalDmg'} item xs={6}><Sword size={48}></Sword> {bulbi.physicalDmg()}</Grid>
        <Grid item xs={6}><Shield size={48}></Shield>{bulbi.physicalArmors()}</Grid>

        <Grid item xs={4}><Sword style={{fill:'red'}} size={48}></Sword> {bulbi.colorAttack(0)}</Grid>
        <Grid item xs={4}><Sword style={{fill:'green'}} size={48}></Sword> {bulbi.colorAttack(0)}</Grid>
        <Grid item xs={4}><Sword style={{fill:'blue'}} size={48}></Sword> {bulbi.colorAttack(0)}</Grid>

        <Grid item xs={4}><Shield size={48} style={{fill:'red'}}></Shield>{+bulbi.colorDefence(0)}</Grid>
        <Grid item xs={4}><Shield size={48} style={{fill:'green'}}></Shield>{bulbi.colorDefence(1)}</Grid>
        <Grid item xs={4}><Shield size={48} style={{fill:'blue'}}></Shield>{+bulbi.colorDefence(2)}</Grid>


      




        </Grid>    




        </Stack>

        

        
        
        

    );
}

export default BGear;