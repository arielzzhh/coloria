import { DeadInfo } from "../../Script/Data/Data";

export function Log(){



    return(
<div style={{backgroundColor:'green',border:'black solid 1px',fontSize:'0.8em',overflowY:'scroll',height:'1%' }  } >
        <p style={{backgroundColor:'rgba(128,255,32)'}}>Log </p>

        {DeadInfo.Log.map((elment,index)=>(
            <p >{index}... {elment}</p>
        ))}
        
        
              

        
        
        
        </div>
    )


}



export default Log;