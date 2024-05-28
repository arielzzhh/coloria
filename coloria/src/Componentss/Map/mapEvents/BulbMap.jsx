export function BulbMap({bulb,showSelfFilter, x, y, tile, Yindex, Xindex, map,length}){


switch (length){
    case 1:
    return (<>    <circle cx={y + 100 / (map.size * 1.5)} cy={x + 100 / (map.size * 1.5)} r={25/map.size} fill={`rgb(${bulb[0].rgb[0]*2.55},${bulb[0].rgb[1]*2.55},${bulb[0].rgb[2]*2.55})`}></circle>
    </>)
    case 2:
    return (<>
    <circle cx={y + 100 / (map.size * 1.5)} cy={x + 100 / (map.size * 1.5)} r={25/map.size} fill={`rgb(${bulb[0].rgb[0]*2.55},${bulb[0].rgb[1]*2.55},${bulb[0].rgb[2]*2.55})`}></circle>
    <circle cx={y + 100 / (map.size * 5)} cy={x + 100 / (map.size * 1.5)} r={25/map.size} fill={`rgb(${bulb[1].rgb[0]*2.55},${bulb[1].rgb[1]*2.55},${bulb[1].rgb[2]*2.55})`}></circle>

    
    
    
    </>)
    case 3:
    return (<>

    </>)
    case 4:
    return (<>



    
    </>)
    case 5:    
    return (<><circle r={46}></circle></>)
    
}
}


export default BulbMap;