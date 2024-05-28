import BulbMap from "./BulbMap"


export function BulbEvent ({showSelfFilter, x, y, tile, Yindex, Xindex, map}){    



    if (tile.Events[0]!==undefined){


        switch(tile.Events[0][1]){
            case 'friendly':
                return <BulbMap bulb={tile.Events[0][0]} length={tile.Events[0][0].length} showSelfFilter={showSelfFilter} x={x} y={y} tile={tile} Yindex={Yindex} Xindex={Xindex} map={map}></BulbMap>
                case 'battle':
                return <BulbMap bulb={tile.Events[0][0]} length={tile.Events[0][0].length} showSelfFilter={showSelfFilter} x={x} y={y} tile={tile} Yindex={Yindex} Xindex={Xindex} map={map}></BulbMap>
        }
    
    
    
      
    }

  
}


export default BulbEvent