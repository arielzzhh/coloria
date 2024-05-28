

import Sword from "./weapons/Sword";
import Bow from "./weapons/Bow";
import DualWield from "./weapons/DualWield";
import Orb from "./weapons/Orb";
import Belt from "./weapons/Belt";
import Hat from "./weapons/Hat";
import Jumper from "./weapons/Jumper";
import { Hammer } from "./weapons/Hammer";
import { useState } from "react";
import Potion from "./potion/Potion";
import { Stack, Typography } from "@mui/material";
export function ItemTypeInfo({ Itemi }) {
    const [Item, setItemTypes] = useState(Itemi);



    return(<>
    <Typography style={{fontSize:'2em'}} >{'pysical:'+Itemi.pysical}</Typography>
    <p  style={{fontSize:'2em',}}>{'RGb:'+Itemi.rgb[0]+'/:'+Item.rgb[1]+'/'+Item.rgb[2]}</p>



    {Item.perks.map((element, index) => (
 <Stack direction={'row'} justifyContent={'space-evenly'}><Typography >{element[0]+":"}</Typography><Typography >{element[1]}</Typography></Stack>
))}

    


   

    
    
    
    
    </>


    )







   {/* switch (weapon.constructor.name){
      case 'Sword':
        return (<p >dasdas</p>)
        case 'Hammer':
          return (<p >dasdas</p>)
        
          case 'Bow':
          return (<p >dasdas</p>)
          case 'Orb':
          return (<p >dasdas</p>)
          case 'jumper':
            return (<p >dasdas</p>)
            case 'belt':
            return (<p >dasdas</p>)
            case 'hat':
            return (<p >dasdas</p>)
            case 'DualWield':
            return (<p >dasdas</p>)
      
    }*/}




    

  
  }
   


export default ItemTypeInfo;