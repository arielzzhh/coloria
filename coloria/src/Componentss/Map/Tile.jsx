import EmptyTile from "./Tiles/EmptyTile";
import { useState } from "react";
import ClimbFilter from "./Tiles/filters/Climb/ClimbFilter";
import DistanceFilters from "./Tiles/filters/distance/DistanceFilters";
import { IndexFilter } from "./Tiles/filters/Index/IndexFilter";
import SelfFilter from "./Tiles/filters/self/SelfFilter";
import BulbEvent from "./mapEvents/BulbEvent";
import ChestFilter from "./Tiles/filters/Chests/ChestFilter";
import TargetPin from "./Tiles/filters/TargetPin";
import WorldObjectFilter from "./Tiles/filters/WorldObject/WorldObjectFilter";
import PropretyFilter from "./Tiles/filters/PropretyFilter/PropretyFilter";
import MineFilter from "./Tiles/filters/Mine/MineFilter";
import EventFilter from "./Tiles/filters/EventFilter/EventFilter";
export function Tile ({tile,x,y,size,Yindex,Xindex,map}){

      const [setedTile,setTile] =useState(tile)
      const [showClimbFilter,setshowClimbFilter] =useState(0);   // 0:-noIcon //1yesIcons 2 smallIcons
      const [showDistanceFilter,setshowDistanceFilter] =useState(0);
      const [showIndexFilter,setshowIndexFilter] =useState(0);
      const [showSelfFilter,setshowSelfFilter] =useState(1);
      const [showChestsFilter,setChestfFilter] =useState(1);





      return<g >
      
      

<TargetPin map={map} Xindex={Xindex} Yindex={Yindex} showIndexFilter={showIndexFilter} size={size} tile={tile} x={x} y={y}></TargetPin>
      
      
      
       <EmptyTile map={map} Xindex={Xindex} Yindex={Yindex} showIndexFilter={showIndexFilter} size={size} tile={tile} x={x} y={y}></EmptyTile>
      <ClimbFilter map={map} showClimbFilter={showClimbFilter}  tile={tile} x={x} y={y} Yindex={Yindex} Xindex={Xindex}></ClimbFilter>
   {/*<DistanceFilters map={map} Xindex={Xindex} Yindex={Yindex} showIndexFilter={showIndexFilter} tile={tile} x={x} y={y} ></DistanceFilters>      //not neccesscery right know     */}
   <IndexFilter map={map} Xindex={Xindex} Yindex={Yindex} showIndexFilter={showIndexFilter} tile={tile} x={x} y={y}></IndexFilter>
   <SelfFilter map={map} Xindex={Xindex} Yindex={Yindex} showIndexFilter={showSelfFilter} tile={tile} x={x} y={y}></SelfFilter>
     <BulbEvent  map={map} Xindex={Xindex} Yindex={Yindex} showIndexFilter={showSelfFilter} tile={tile} x={x} y={y}></BulbEvent>
     <ChestFilter map={map} Xindex={Xindex} Yindex={Yindex} showIndexFilter={showSelfFilter} tile={tile} x={x} y={y}></ChestFilter>
     <WorldObjectFilter map={map} Xindex={Xindex} Yindex={Yindex} showIndexFilter={showSelfFilter} tile={tile} x={x} y={y}></WorldObjectFilter>
     <PropretyFilter map={map} Xindex={Xindex} Yindex={Yindex} showIndexFilter={showSelfFilter} tile={tile} x={x} y={y}></PropretyFilter>
     <EventFilter map={map} Xindex={Xindex} Yindex={Yindex} showIndexFilter={showSelfFilter} tile={tile} x={x} y={y}></EventFilter>
      </g>
}



export default Tile;