import  { useState, useEffect, useContext } from "react";
import Typography from '@mui/material/Typography'
import { Grid, Rating, Box, Stack } from '@mui/material';
import { GiLevelThree } from "react-icons/gi";
import { Circle } from "@mui/icons-material";
import AdventureStatus from "./adventureStatus/AdventureStatus";
import BulbSlot from "../../../Components/adventure/BulbSlot";
import { UserContext } from "../../../Router/Routing";
import roster from "../../../Script/Handaling/roster";
import TeamSlot from "../../../Components/adventure/TeamSlot";
import Item from "../../../Components/Items/Item";
import CVector from "../../../Components/Items/colorVectors/CVector";

export function AdventureInfo({setTabiName}) {
    const { data, update } = useContext(UserContext); // Consuming the UserContext using the useContext hook










    return (



        
<>


<Typography style={{backgroundColor:'silver'}} >{'name :' + data.pick.adventure.name}</Typography>
         <Grid container style={{ fontSize: '35px' }}>
         <Grid item xs={12}>requirment:</Grid>
         <Grid item xs={12}> <div ><Circle /> {data.pick.adventure.restriction[0]+'/'+data.pick.adventure.restriction[1]} <GiLevelThree /> {data.pick.adventure.lvl} <Rating max={10} defaultValue={data.pick.adventure.rairity} readOnly></Rating> </div> </Grid>

              
             <Grid item xs={12} style={{ fontSize: '17px', backgroundColor: 'gold' }}>{'description :'}</Grid>
             <Grid item xs={12} style={{ fontSize: '32px', backgroundColor: 'silver', height: 'auto' }}>{data.pick.adventure.description}</Grid>
             <Grid style={{border:'2px solid rgba(89,100,100) ',backgroundColor:'rgba(139,155,155)'}} item xs={12}>
  Complition Prizes <br />

<Stack direction={'row'} justifyContent={'center'}>
  {data.pick.adventure.Prize.map((element, index) => {
    switch(true) {
        case element.constructor.name === 'Array':
            return (
                    <CVector color={element[0]} amount={element[1]} />
            );
        default:
            return (
         <Item W="50%"   itemShown={element} ></Item>
            );
    }
})}

</Stack>






</Grid>             <Grid item xs={12}>
  <p>Team Handaling</p>
<TeamSlot Number={data.pick.adventure.restriction}></TeamSlot>

             </Grid>
             <Grid item xs={12}>
                 <AdventureStatus setTabiName={setTabiName}  adv={data.pick.adventure} ></AdventureStatus>
             </Grid>
         </Grid>
      
     </>









      
    )
}

export default AdventureInfo;

