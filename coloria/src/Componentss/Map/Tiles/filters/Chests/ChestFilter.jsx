export function ChestFilter ({showSelfFilter, x, y, tile, Yindex, Xindex, map}){







    if (tile.Events[0]&&tile.Events[0][1]=='chest'){

    return (
    
    
    <rect stroke="black" strokeWidth={'00.04em'}  fill="brown" x={y+((1/2)*100/map.size )} y={x+((1/2)*100/map.size)} width={3} height={3}></rect>



)}
}


export default ChestFilter;