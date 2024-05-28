import Scene from "./Scene";
import { currentData } from "../../Script/Data/Data";
import { useState } from "react";


export function Story({updateData,setTabiName}){
    const [story,setStory]=useState(currentData.Story)

return(<>



<Scene Scene={story.Scenes[0]}></Scene>
<Scene Scene={story.Scenes[1]}></Scene>


</>)

}


export default Story;