
import { Button } from "@mui/material";
import SaveOption from "../../Components/save/SaveOption";
import { currentData } from "../../Script/Data/Data";
import option from "../../Script/option";
import { useNavigate } from "react-router-dom";


export function SavePage() {

const navigaor =useNavigate()

    function startGame(){
        option.startNewGame();
        navigaor('/game')
    }
    


    return(<>

<SaveOption index={1}></SaveOption>


<br />

<Button onClick={()=>{
startGame()
}} variant="contained">Start New Game</Button>
    
    
    </>)
}


export default  SavePage;