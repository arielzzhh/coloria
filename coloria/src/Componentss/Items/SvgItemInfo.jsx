import { useState } from "react"
import SvgItem from "./Item"
import { Stack } from "@mui/material"
import ItemTypeInfo from "./ItemTypeInfo"

export function SvgItemInfo({itemShown,W}){


    if(itemShown==null){
        return(<><p>null Item</p></>)
    }


    return(<Stack style={{backgroundColor:'silver'}} direction={'column'}>
         <SvgItem  itemShown={itemShown} W={W}></SvgItem>

    
    </Stack>)
}

export default SvgItemInfo