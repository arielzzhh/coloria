export function BulbA ({bulb}){
    



    return( 
    <>             <circle cx={bulb.Path}  cy={5} fill={`rgb(${bulb.rgb[0]*2.55},${bulb.rgb[1]*2.55},${bulb.rgb[2]*2.55})`} r={4}></circle>
                 </>)
}


export default BulbA