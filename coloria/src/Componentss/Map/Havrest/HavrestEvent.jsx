import createItem from "../../../Script/Creation/createItem"
import { currentData } from "../../../Script/Data/Data";
import BImage from "../../Bulb/Images/BImage";
import {Rating,Button, Stack} from '@mui/material';
import lvl1 from '../../../globalImage/Woods/lvl1.jpg'
import haverest from '../../../Script/map/haverst/haverest'
import { useState,useContext } from "react";
import { UserContext } from "../../../Router/Routing";
import Item from "../../Items/Item";

 

export function HavrestEvent ({Events,tile}){
    const { data, update } = useContext(UserContext);


console.log(Events[2])
    switch (true){
        case (createItem.ResourceType(Events[0])=='wood'&&Events[2]>0):
        return (<div style={{backgroundColor:'silver'}}>
        <p> you found wood</p>
        <p></p>
        <Rating readOnly max={4} value={Events[2]} > </Rating>      
        <br />  
        <img style={{width:'50%'}} src={lvl1} alt="" />

        <br></br> 

        <div>
       <Button></Button></div>









<Stack direction={'row'} justifyContent={'space-evenly'}>
        {currentData.Team.map((elment,key)=>(<div>


   <BImage W={'150'} bulb={elment}></BImage>
   <Item W="150" itemShown={elment.weapon}></Item>
   <Button  disabled={elment.weapon.constructor.name!=='WorkAxe'}  onClick={()=>{haverest.havrestingWood(Events,currentData.Team[key]) ;update(); }} variant={'contained'}>use equiped Axe</Button>
   <br />

   </div>
))}
</Stack>

<br />
        
        </div>)










        case (Events[0]=='ore'):
        return (<><p>ore</p></>)
        case (Events[0]=='Planets'):
        return (<><p>Planets</p></>)

    }







}


export default HavrestEvent;