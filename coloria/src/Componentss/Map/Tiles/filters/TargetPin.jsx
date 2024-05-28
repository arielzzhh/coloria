import { useContext } from "react";
import { UserContext } from "../../../../Router/Routing"



export function TargetPin ({showIndexFilter,x,y,tile,Yindex,Xindex,map,size}){
    const { data, update } = useContext(UserContext);




    return (<> 
{/*console.log(data.adventure.objectives[0])*       <circle cx={x + 100 / (map.size * 2)} cy={y + 100 / (map.size * 2)} fill="yellow" r={5}></circle>    */}


        </>)
}


export default TargetPin