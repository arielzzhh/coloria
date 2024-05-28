import { Button } from "@mui/material"
import { Swords } from "lucide-react"
import { currentData } from "../../../Script/Data/Data"
import EquipButton from "../../../Components/Items/EquipButton"


export function GearCompere({item,bulbIndex}){
  





    



    function returnTypedGear (){
   switch(item.cunsructor.name){
    case 'hat':
    return currentData.roster[bulbIndex].headGear;
    case 'belt':
    return currentData.roster[bulbIndex].belt;
    case 'jumper':
    return currentData.roster[bulbIndex].jumper;
   }

    }




    switch(true){
   case  item.isWeapon()==true:
return(<><table>
<tr><td>comperee</td><td>chosen</td><td>current</td></tr>
<tr><td><Swords/></td><td>{item.pysical}</td><td>{currentData.roster[bulbIndex].weapon.pysical}</td></tr>
<tr><td></td><td></td><td></td></tr>
 </table>

 <EquipButton bulb={currentData.roster[bulbIndex]} Item={item}></EquipButton>





</>)



case  item.isArmor()==true:
    return(<><table>
    <tr><td>comperee</td><td>chosen</td><td>current</td></tr>
    <tr><td><Swords/></td><td>{item.pysical}</td><td>{currentData.roster[bulbIndex].weapon.pysical}</td></tr>
    <tr><td></td><td></td><td></td></tr>
     </table>
    <Button onClick={()=>{}}>equip</Button><Button>dismantle</Button></>)



    }







}


export default GearCompere