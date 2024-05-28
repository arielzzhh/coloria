import { Button, Grid, Stack, Typography } from "@mui/material"
import BImage from '../../Components/Bulb/Images/BImage'
import Tab from "../../Components/Bulb/Tabs/Tab"
import { useState,useContext } from "react"
import { saveContext } from "../../LayOut/Layout"
import { currentData } from "../../Script/Data/Data"
import { useNavigate } from "react-router-dom"
export function BulbPage ({update,setData,Data}){
    const [ActiveTab,setActiveTab] = useState('info')
    const [rosterIndex,setRosterIndex]=useState(0)




    const naviagor =useNavigate();



    function changeBulb(){
        let nextIndex =rosterIndex ;

        if (rosterIndex==currentData.roster.length-1){
            nextIndex=0
        }
        if (rosterIndex<currentData.roster.length-1){
            nextIndex++
        }
    setRosterIndex(nextIndex)
    }


 

    function link (){
        console.log(currentData.map==null)
        if(currentData.map==null){
        naviagor('/game')
        }
        if(currentData.map!==null){
         naviagor('/map') }
       }
       

    return(<>



    <Grid container spacing={2}>
    <Grid item xs={6}><Button onClick={()=>{link()}} fullWidth>Return To Game</Button></Grid>
    <Grid item xs={6}><Button onClick={()=>{changeBulb()}} fullWidth>NextBulb</Button></Grid>


    <Grid item xs={6} lg={4}><BImage bulb={currentData.roster[rosterIndex]}></BImage></Grid>
    <Grid  item  xs={6} lg={8}>
    <Stack direction={'row'} justifyContent={'center'} width={'100%'}>
    <Button onClick={()=>{setActiveTab('info')}} fullWidth variant="contained">Info</Button>
    <Button onClick={()=>{setActiveTab('BRgb')}} fullWidth variant="contained">Gene</Button>
    <Button onClick={()=>{setActiveTab('BGear')}} fullWidth variant="contained">Gear</Button>
    <Button onClick={()=>{setActiveTab('Bskills') } } fullWidth variant="contained">skills</Button>
    <Button onClick={()=>{setActiveTab('Binteract')}} fullWidth variant="contained">interact</Button>
    </Stack>

    

<Tab Bulb={currentData.roster[rosterIndex]} Tab={ActiveTab} update={update} setData={setData} Data={Data} ></Tab>

        


 
    </Grid>
    </Grid>
    
    

    
    </>)
}


export default BulbPage