import { Button } from "@mui/material"
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp"
import CVector from "../../Items/colorVectors/CVector"
import { Clock } from "lucide-react"
import { currentData } from "../../../Script/Data/Data"
import { UserContext } from "../../../Router/Routing"
import { useContext } from "react"
import { Home } from "lucide-react"

export function BuilduingUpgrade({builduing,proprety}){
    const { data, update } = useContext(UserContext);


    console.log(proprety.Builduings[builduing].status)



    if(proprety.Builduings[builduing].status[0]==false){

        return(<>
            <Button onClick={()=>{proprety.Builduings[builduing].TryToUpgrade();update(); }} disabled={!proprety.Builduings[builduing].possibleToUpgrade()} variant="contained"><KeyboardArrowUp></KeyboardArrowUp>||{proprety.Builduings[builduing].upgradeCost().map((elment,index)=>(
            <CVector color={elment[0]} amount={elment[1]}></CVector>               ))}</Button>
            <div style={{display:'flex',justifyContent:'center'}}>cunstrct time <Clock /> {proprety.Builduings[builduing].AmountOfDays()} </div></>)}



if(proprety.Builduings[builduing].status[0]==true){


    return(<div style={{backgroundColor:'yellow'}}>
    Under Cunstraction  <br />   
    <div style={{display:'flex',justifyContent:'center'}}>  <Clock /> {proprety.Builduings[builduing].status[1]} left </div>
    
    </div>)





    }
}


   


export default BuilduingUpgrade