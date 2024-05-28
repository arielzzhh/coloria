import { Grid,Rating,Button } from '@mui/material';
import { GoTypography } from 'react-icons/go';
import BImage from '../../../../Components/Bulb/Images/BImage';
import { currentData, } from '../../../../Script/Data/Data';
import { useState,useEffect,useContext } from 'react';
import roster from '../../../../Script/Handaling/roster';
import bulb from '../../../../Script/bulb/bulb';
import { UserContext } from '../../../../Router/Routing';
import Mat from '../../../../Script/util/Mat';


export function NoActive ({setTabiName,updateData,adv}){
    const { data, update } = useContext(UserContext);






   






    






    


return (< div style={{backgroundColor:'silver', margin:'0px', padding:'0px'}}>
<p >Not Active</p>
<p style={{fontSize:'14px'}}>choose Bulbs to go to adventure</p>

{currentData.roster.map((element,key) => {


if(element.available()){
    return  <BImage bgcolor={Mat.Background(element,key)}   style={{visibility:'hidden'}} onClick={()=>{ 

          if (!currentData.pick.nextPicker.includes(key)) {
            roster.addIndex(key,adv.restriction[1]); update()
          }

           } }index={key}  key={key} W={75} bulb={element} />
}

    
                 

  








     })} 


<Grid container>
<Grid style={{fontSize:'17px'}} item xs={4}> {'days to travel :' +currentData.pick.adventure.activeDay}</Grid>
<Grid style={{fontSize:'17px'}} item xs={4}>{} </Grid>
<Grid style={{fontSize:'17px'}} item xs={4}>{} </Grid>
</Grid>

<Grid item xs={12}>
<Button disabled={!adv.restriction[0]<=data.pick.nextPicker.length&&!adv.restriction[1]>=data.pick.nextPicker.length}  onClick={()=>{ adv.activateAdventure (); setTabiName('')     }}  fullWidth variant='contained' >send To Mission</Button>

  

</Grid>



</div>)   


}


export default NoActive;