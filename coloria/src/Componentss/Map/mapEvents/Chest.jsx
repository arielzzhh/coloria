 import { Button, ButtonGroup } from "@mui/material";
import Item from "../../Items/Item";
import { useContext } from "react";
import { UserContext } from "../../../Router/Routing";
import { currentData } from "../../../Script/Data/Data";

export function Chest ({tile,Events}){
    const { data, update } = useContext(UserContext);



function TakeItem (){
    currentData.inventory.push( tile.Events[0][0])
    tile.Events.splice(0, 1);
    update()





    if(currentData.adventure.currentObjective().CheakObjective()){
        currentData.adventure.currentObjective().finishObjective();
    }


}




    return(<>
    <Item itemShown={Events[0]} W="250"></Item>
    <ButtonGroup>
    <Button onClick={()=>{TakeItem()}}>take</Button><Button>salvage</Button><Button></Button>
    </ButtonGroup>
    
    

    
    
    
    </>)
}


export default Chest;