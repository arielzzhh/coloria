export function EventFilter ({showIndexFilter,x,y,tile,Yindex,Xindex,map,size}){



 if(tile.EventMsg()=='MustToFinish'){
return(<>
                <circle cx={y + 100 / (map.size * 2)} cy={x + 100 / (map.size * 2)} r={25/map.size}></circle>
    
    </>)

}
}



export default EventFilter