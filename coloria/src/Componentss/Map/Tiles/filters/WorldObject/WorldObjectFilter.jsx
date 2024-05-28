


export function WorldObjectFilter ({showIndexFilter,x,y,tile,Yindex,Xindex,map,size}){


if (tile.Events[0]!==undefined&&tile.Events[0][0]!==undefined) {
switch (true){
    case (tile.Events[0]=='blackWood'&&tile.Events[2]>=3):return (<>
        <rect x={y + 100 / (map.size * 1.7)} y={x + 100 / (map.size * 1.5)} width={12/map.size} height={25/map.size} strokeWidth={'0.4'} stroke="black" fill="brown"></rect>
        <circle cx={y + 100 / (map.size * 1.5)} cy={x + 100 / (map.size * 1.5)} r={12/map.size}></circle>
        <rect x={y + 100 / (map.size * 1.2)} y={x + 100 / (map.size * 1.5)} width={12/map.size} height={25/map.size} strokeWidth={'0.4'} stroke="black" fill="brown"></rect>
        <circle cx={y + 100 / (map.size * 1.1)} cy={x + 100 / (map.size * 1.5)} r={12/map.size}></circle>
        <rect x={y + 100 / (map.size * 1.4)} y={x + 100 / (map.size * 1.6)} width={12/map.size} height={25/map.size} strokeWidth={'0.4'} stroke="black" fill="brown"></rect>
        <circle cx={y + 100 / (map.size * 1.3)} cy={x + 100 / (map.size * 1.6)} r={12/map.size}></circle>
        </>)



    case (tile.Events[0]=='blackWood'&&tile.Events[2]>=2):return (<>
    <rect x={y + 100 / (map.size * 1.7)} y={x + 100 / (map.size * 1.5)} width={12/map.size} height={25/map.size} strokeWidth={'0.4'} stroke="black" fill="brown"></rect>
    <circle cx={y + 100 / (map.size * 1.5)} cy={x + 100 / (map.size * 1.5)} r={12/map.size}></circle>
    <rect x={y + 100 / (map.size * 1.2)} y={x + 100 / (map.size * 1.5)} width={12/map.size} height={25/map.size} strokeWidth={'0.4'} stroke="black" fill="brown"></rect>
    <circle cx={y + 100 / (map.size * 1.1)} cy={x + 100 / (map.size * 1.5)} r={12/map.size}></circle>
    </>)

case (tile.Events[0]=='blackWood'&&tile.Events[2]>=1):return (<><rect x={y + 100 / (map.size * 1.7)} y={x + 100 / (map.size * 1.5)} width={12/map.size} height={25/map.size} strokeWidth={'0.4'} stroke="black" fill="brown"></rect><circle cx={y + 100 / (map.size * 1.5)} cy={x + 100 / (map.size * 1.5)} r={12/map.size}></circle></>)
case tile.Events[0][0]=='stone':return (<> <circle cx={x + 100 / (map.size * 2)} cy={y + 100 / (map.size * 2)} r={5}></circle> </>)





}


    
   
}


}

export default WorldObjectFilter;