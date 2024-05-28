import Tbulb from "../../../Components/Bulb/Training/Tbulb"
import { currentData } from "../../../Script/Data/Data"
import { Button, Paper, Stack } from "@mui/material";
import BImage from "../../../Components/Bulb/Images/BImage";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useState } from "react";
import TrainingRecord from "./TrainingRecord";



export function Trainining ({setTabiName,proprety,updateData,myData}){
    const [bulbTrained,setBulbTrained]=useState(currentData.roster[0])

    


    return(<>
    <Stack direction={'column'} justifyContent={'space-evenly'}>
    {currentData.roster.map((element,key)=>(
<Tbulb onclick={()=>{setBulbTrained(currentData.Team[key])}}   bulb={element} key={key} W={50} ></Tbulb>     

   
    ))}
    </Stack >

    

<TrainingRecord bulb={bulbTrained}></TrainingRecord>









    </>)


}


export default Trainining