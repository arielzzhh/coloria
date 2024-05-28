
import Bimageactivity from "./Bimageactivity";


export function BimageStats ({state,bulb}){



    switch (state){
        case 0:
        return (<></>)
        case 1:
        return (<>
        <rect x={80} y={60} width={40} height={40} fill="red" >   </rect>
        <rect x={120} y={60} width={40} height={40} fill="green" >   </rect>
        <rect x={160} y={60} width={40} height={40} fill="blue" >   </rect>
        <rect x={100} y={0} width={100} height={20} fill="red" >   </rect>

        <text x={100} y={90} textAnchor={"middle"} fontSize={'1.2em'} fill="white">{bulb.rgb[0]}</text>
        <text x={138} y={90} textAnchor={"middle"} fontSize={'1.2em'} fill="white">{bulb.rgb[1]}</text>
        <text x={178} y={90} textAnchor={"middle"} fontSize={'1.2em'} fill="white">{bulb.rgb[2]}</text>
        <text  x={55} y={97} fontSize={'16px'} textAnchor="middle">{bulb.size.toFixed(2)}</text>

        <Bimageactivity bulb={bulb}></Bimageactivity>
        <text y={15} x={125}>{Math.floor(bulb.hp[0])}/{Math.floor(bulb.hp[1])}</text>



        
        
        
        
        
        </>)

}

}


export default BimageStats;