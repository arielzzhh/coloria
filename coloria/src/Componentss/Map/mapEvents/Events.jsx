
import BulBEncounter from "./BulBEncounter";
import HavrestEvent from "../Havrest/HavrestEvent";
import Chest from "./Chest";
import StoryMap from "./StoryMap";
import PropretyControl from "./propretyControl/PropretyControl";
import EventMsg from "../../Event/EventMsg";
export function Events({tile,map}) {



  if (tile.Events[0]!==undefined){
    switch(true){ 

      case (tile.Events[1]=='worldObject'):
        return <HavrestEvent tile={tile} Events={tile.Events} ></HavrestEvent>
        
      case tile.Events[0][0].constructor.name=='EventMsg':
        return  (<><EventMsg EventMsg={tile.Events[0][0]}  ></EventMsg></>)

      case tile.Events[1]=='friendly':
      return  <BulBEncounter tile={tile} Events={tile.Events[0]}></BulBEncounter>
      case tile.Events[0][1]=='battle':
      return <BulBEncounter tile={tile} Events={tile.Events[0]} ></BulBEncounter>
      case tile.Events[0][1]=='chest':
      return <Chest tile={tile} Events={tile.Events[0]} ></Chest>
      case tile.Events[1]=='storyMap':
      return <StoryMap tile={tile} Events={tile.Events[0]} ></StoryMap>
    


      
    }
}


if(map.proprety!==null&&(map.cord[0]==map.middlePoint()[0]&&map.cord[1]==map.middlePoint()[1])){
  return <PropretyControl map={map} tile={tile} Events={tile.Events[0]}></PropretyControl>

}
  

  
}

export default Events;