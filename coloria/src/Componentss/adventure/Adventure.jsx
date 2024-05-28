import { useState } from "react"
import { Button, Rating, Stack, Typography } from "@mui/material"
import Powder from "../Items/colorVectors/Powder"
import BulbSlot from "./BulbSlot"
import adventure from "../../Script/adventures/adventure"
import Status from "./Status/Status"
import BImage from "../Bulb/Images/BImage"
import { currentData } from "../../Script/Data/Data"
import { UserContext } from "../../Router/Routing"
import { useContext } from "react"
import roster from "../../Script/Handaling/roster"
import createItem from "../../Script/Creation/createItem"
import darkTrees from "../../globalImage/darkTrees.jpg"
import Item from "../Items/Item"
import inventory from "../../Script/Handaling/inventory"
export function Adventure ({adv,setTabiName,index}){
    const { data, update } = useContext(UserContext);

    return (<div onClick={()=>{ currentData.pick.adventure=adv; roster.startingSlot(); setTabiName('AdventureInfo');}}  style={{border:'black 2px solid',fontSize:'0.6em'}}>
        <img style={{width:'100%',height:'100%'}} src={darkTrees} alt="Dark Trees" />

        
        <p style={{fontSize:'1em'}}>{adv.name}</p>
    <Rating max={adv.rairity} readOnly  size="small"    defaultValue={adv.rairity}  />
<div >
</div>


<Status index={index}  setTabiName={setTabiName}  adv={adv}></Status>


</div>





       
    
    )



}



export default Adventure