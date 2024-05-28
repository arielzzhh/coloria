import map2D from "../../../../Script/map/map2D"
import { Map  } from 'lucide-react';

export function SceneInfo ({adventure}){

    switch (true){
        case (adventure.EndingStory ==null):
        return (<><p>  <Map /> No story Piece</p></>)
        case (adventure.EndingStory !==null):
        return (<><p>  <Map />   story Piece</p></>)



}}

   



export default SceneInfo