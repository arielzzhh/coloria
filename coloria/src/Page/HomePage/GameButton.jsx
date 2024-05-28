import { Button } from "@mui/material";
import Day from "../../Script/Date/Day";
import { currentData,savePiece } from "../../Script/Data/Data";
import axios from "axios";
import LoginContext from "../../customhooks/loginContext";
import { useContext } from "react";



export function GameButton ({update}){

    const { login } = useContext(LoginContext);    


    async function PushDataPoint (){

        try {
        await  axios.post('http://localhost:8000/data/register',savePiece(login));
      
        

  
        
        }


        catch(error){
            console.log(error)
        }


 

        
    }






    
    

    if(currentData.Date.day%100==0){
        return(<>


            <Button dis onClick={()=>{PushDataPoint() ;Day.passDay(); update();         }}   variant="contained" style={{fontSize:'1.6em',height:'auto'}} fullWidth>SendInfo</Button>

    
    </>)



    }
 




    return(<>
            <Button dis onClick={()=>{Day.passDay(); update();}} disabled={!Day.CantPassDayAdventures()}  variant="contained" style={{fontSize:'1.6em',height:'auto'}} fullWidth> pass Day</Button>

    
    </>)



}


export default GameButton