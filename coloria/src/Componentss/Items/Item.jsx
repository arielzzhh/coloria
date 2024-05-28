import { useState } from "react";
import ItemType from "./ItemType";
import { Stack,Typography } from "@mui/material";
import TitleFilter from "../util/TitleFilter";
import { SvgFilter } from "./SvgFilter";

export function Item({ itemShown, W='auto', direction,onClick,border }) {

  const[titlestate,setTitleState]=useState(0)


  function rarityBasedColor(){
    switch (true){
      case (itemShown.rarity==0):
        return 'rgb(63,63,63)'
        case (itemShown.rarity==1):
          return 'yellow'
          case (itemShown.rarity==2):
            return 'cyan'




    }
  }









  return (
    <Stack direction={'row'} justifyContent={"center"} >
      <div style={{ display: "flex", justifyContent: "center"  }}>
        <svg onMouseLeave={()=>{setTitleState(0) }} onMouseEnter={()=>{setTitleState(1) }} onClick={onClick}  style={{backgroundColor:rarityBasedColor(),borderColor:border}}  viewBox="0 0 100 100" width={W} height={W}>
<SvgFilter current={titlestate} itemShown={itemShown}></SvgFilter>
        </svg>




      </div>
    


      
    </Stack>
  );
}

export default Item;