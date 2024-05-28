import { X } from "@mui/icons-material"

export function ClimbFilter ({tile ,x,y,showClimbFilter,map,Yindex,Xindex}){
    

   // console.log (map.tiles[map.move[0]][map.move[1]]);



    switch (true){
     


        case  ((showClimbFilter==0) &&!tile.Climable):
        return  <>  <text fontSize={6} fill="red" x={x+100/(map.size*7)} y={y+100/(map.size*1)}>X</text>      </>
        case  ((showClimbFilter==1) &&(map.move[0]==Xindex&&map.move[1]==Yindex)):
        return  <>  <text fontSize={25} fill="Yellow" x={x+100/(map.size*7)} y={y+100/(map.size*1)}>V</text>      </>
        case ((showClimbFilter==1 && tile.Climable)) :
        return  <> <text fontSize={25} fill="green" x={x+100/(map.size*7)} y={y+100/(map.size*1)}>V</text>   </>  
        case ((showClimbFilter==1 && !tile.Climable)) :
        return  <> <text fontSize={25} fill="red" x={x+100/(map.size*7)} y={y+100/(map.size*1)}>X</text>   </>  
        case  ((showClimbFilter==2) &&tile.Climable):
        return  <>  <text fontSize={6} fill="green" x={x+100/(map.size*7)} y={y+100/(map.size*1)}>v</text>      </>
        case  ((showClimbFilter==2) &&!tile.Climable):
        return  <>  <text fontSize={6} fill="red" x={x+100/(map.size*7)} y={y+100/(map.size*1)}>X</text>      </>
        
        
      
      


    }




    
}



export default ClimbFilter