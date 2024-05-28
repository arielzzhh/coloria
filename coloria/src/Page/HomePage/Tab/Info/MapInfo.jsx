import map2D from "../../../../Script/map/map2D"
import { Map  } from 'lucide-react';

export function MapInfo ({adventure}){


    


switch (true){
case (adventure.Map ==null):
return (<><p>  <Map />  noMap</p></>)
case (adventure.Map.constructor.name=='Map'):
return (<><p>  <Map /> 1dMap  </p></>)
case (adventure.Map.constructor.name=='map2D'):
return (<><p>  <Map /> 2dMap  </p></>)


}

   
}


export default MapInfo