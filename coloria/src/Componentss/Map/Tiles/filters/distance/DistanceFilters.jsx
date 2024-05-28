import Map from "../../../../../Script/map/map";

export function DistanceFilters ({showIndexFilter,x,y,tile,Yindex,Xindex,map}){


    return (<>
     <text fill="blue" fontSize={10} x={x+100/(map.size*2)} y={y+2+100/(map.size*2)}>{map.distance(Xindex,Yindex)}</text>
    </>)
}


export default DistanceFilters;


