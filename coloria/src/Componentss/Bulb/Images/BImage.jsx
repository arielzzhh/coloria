import { Fragment, useState } from "react";
import BimageStats from "./BimageStats";
import Bimageactivity from "./Bimageactivity";
import { currentData } from "../../../Script/Data/Data";
import bulb from "../../../Script/bulb/bulb";


export function BImage({bulb,W,onClick,bgcolor,index,viewB="0 0 100 100",state=0,DeleteState,onMouseLeave,onMouseEnter}) {






    function DeleteShow (){


        if (DeleteState==1){
            return 'visible'
        }

  

return 'hidden'

      
      


    }




    





    return(<svg onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} onClick={onClick} viewBox={viewB} style={{width:W,backgroundColor:bgcolor,border:'black solid 1px'}} >




        {/*info */}
<rect y={80} width={30} height={20} fill="silver" ></rect>



<text onClick={onClick} x={50} y={10} fontSize={'16px'} textAnchor="middle">{bulb.name[0]}</text>
<text onClick={onClick} x={15} y={92} fontSize={'16px'} textAnchor="middle">{}</text>

{/* <text onClick={onClick} x={35} y={85} fontSize={'22px'} textAnchor="middle">{bulb.activity}</text>    /activitiy */} 




{/*body */}
<circle onClick={onClick} r={bulb.size} cx={50} cy={50} fill={`rgb(${bulb.rgb[0]*2.55},${bulb.rgb[1]*2.55},${bulb.rgb[2]*2.55})`} ></circle>

    
     
{/*eyes */}
<circle onClick={onClick} r={1+bulb.size/10} cx={55} cy={35} stroke="silver"  fill={`rgb(${bulb.rgb[0]},  ${bulb.rgb[1]}}   ,  ${bulb.rgb[2]}})`}></circle>
 <circle onClick={onClick} r={1+bulb.size/10} cx={45} cy={35} stroke="silver" fill={`rgb(${bulb.rgb[0]},  ${bulb.rgb[1]}},   ${bulb.rgb[2]}})`} ></circle>
{/*Mouth */}
<path d={`M ${50-bulb.size+bulb.size*1/2} ${50+bulb.size*1/4} Q 50  ${50+bulb.size*1/2} ${50+bulb.size-bulb.size*1/2} ${50+bulb.size*1/4}`} strokeWidth={'3'} stroke="green"  fill="'yellow'"/>
{/*items */ }
 {/*belt */ }



        
{bulb.belt ? ( <Fragment> <path d={`M ${50-bulb.size} 50 Q 50 50.5 ${50+bulb.size} 50`} stroke="yellow" fill="rgba(255,255,0,0.8)"/>
<path d={`M ${50-bulb.size} 50 Q 50 49.5 ${50+bulb.size} 50`} stroke="yellow" fill="rgba(255,255,0,0.5)"/>

</Fragment>) : null}








<line visibility={DeleteShow()} x1={0} y1={0} x2={100} y2={100} stroke="red"></line>
<line visibility={DeleteShow()} x1={100} y1={0} x2={0} y2={100} stroke="red"></line>






<BimageStats bulb={bulb} state={state} ></BimageStats>
       



        








    </svg>)
} 


export default BImage;