export function IndexFilter ({showIndexFilter,x,y,tile,Yindex,Xindex,map}){



if(showIndexFilter==1){

    return <><text x={x+100/(map.size*3)} y={y+100/(map.size*2)} fontSize={5}>{Yindex +'/'+Xindex}</text>
    
    </>
}
}


export default IndexFilter;