import { useState } from "react"
import { currentData } from "../../Script/Data/Data"
import { Typography } from "@mui/material"
import Objective from "./Objective"
import { Footprints,MapPin,TreePine,Container } from "lucide-react"
import {Stack} from "@mui/material"
import Events from "./mapEvents/Events"

export function ObjectiveType ({whichOne}){


    switch (whichOne){
    case 0:
    return(<>
     <Events map={currentData.map} tile={currentData.map.tiles[currentData.map.cord[1]][currentData.map.cord[0]]}></Events>
    </>)
    case 1:
return(<>
<Objective elment={currentData.adventure.objectives[0]}></Objective> </>)
    case 2:
    return(<>
    <Stack  direction={'row'} justifyContent={'space-evenly'}>
        <Stack>  <Footprints  size={100} />   {currentData.map.DiscoverdPer()+'%'}</Stack>
        <Stack> <MapPin  size={100}/>{currentData.map.cord[0]+'/'+currentData.map.cord[1]}  </Stack>
        <Stack> <TreePine  size={100}/>{currentData.map.HowMuchWood()}  </Stack>
        <Stack> <Container  size={100}/>{currentData.map.howManyContainer()}  </Stack>

       </Stack>
    </>)
    
    }







    return(<></>)
}