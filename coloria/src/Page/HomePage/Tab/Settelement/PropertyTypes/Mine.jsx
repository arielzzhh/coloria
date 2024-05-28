import Powder from "../../../../../Components/Items/colorVectors/Powder";
import { currentData,adventureData } from "../../../../../Script/Data/Data";
import {proprety as props} from "../../../../../Script/proprety/proprety/proprety";


export function Mine ({Proprety}){


    



    return(<div>



   <p>Mine</p>
    <p>natural Rescursce at site</p>
    {Proprety.raw.map((elment,key)=>(
        <Powder size={65} key={key} color={elment[0]} amount={elment[1]}></Powder>


    ))}
    
    
    </div>)
}




export default Mine ;