import React, { useState } from "react";
import Tile from "./Tile";
import { currentData } from "../../Script/Data/Data";


export function MapTiles({W}) {
  const [currentMapTiles,setCurrentMapTiles]= useState(currentData.adventure.objectives[0].objective[0].tiles)
  

  return (
    <svg viewBox="0 0 100 100" style={{backgroundColor:'rgb(197,198,198)'}}   width={W} >



      { currentMapTiles.map((Rowelement, Yindex) => ( 
        Rowelement.map((tileElment, Xindex) => {

        



      
        return  <Tile 

             tile={tileElment}
            key={`${Yindex}-${Xindex}`} 
            x={100/currentMapTiles.length*Xindex}
            y={100/currentMapTiles.length*Yindex}
            size={100/currentMapTiles.length}
            Yindex={Yindex}
            Xindex={Xindex}
            map={currentData.adventure.objectives[0].objective[0]}


            
            />}
           
          



        )
))}
    </svg>
  );
}

export default MapTiles