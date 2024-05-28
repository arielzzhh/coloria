import { Button } from "@mui/material"

export function  StartBattle ({setsituation}){



    return(<>
    a battle is starting 

    <br />

    <Button variant="contained" onClick={()=>{setsituation('battle')}}>startBattle</Button>
    
    </>)
}


export default StartBattle