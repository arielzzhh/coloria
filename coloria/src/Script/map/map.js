import tile from "./tile";
import { currentData } from "../Data/Data";
import proprety from "../proprety/proprety/proprety";
import Mat from "../util/Mat";
import waterTile from "./waterTile";
import NaturalPrisim from "./NaturalPrisim";





export class Map {
    constructor(name,size,startingPlace1x2,disableNx2,tilesNx3=null,WaterTileNx3,proprety=null,putTheSameTile=null,prisim=[]){
      this.name=name;
        this.size=size;
        this.cord =startingPlace1x2;
        this.tiles =[];
        this.move=[4,4]
        this.proprety =proprety;
        this.prisim=prisim;
        
      
        

        for (let x=0;x<size;x++){   this.tiles[x] =[];
        for(let y=0;y<size;y++){
            this.tiles[x][y] = new tile(true,[])



            currentData.AllMaps.push(this)

} 

}
if (disableNx2!==null){
  this.disableTiles(disableNx2);



}

this.putWaterTiles(WaterTileNx3)


tilesNx3.map((elment)=>{
  this.putTile(elment[0],elment[1],elment[2])
})

this.tiles[this.cord[0]][this.cord[1]].sit();

}




//Proprety


teritoryPossible(){
let startingX=0
let startingY=0
let Size=0






}




canUprade(){
  if(this.MaxLvl()>this.proprety.lvl){
    return true
  }
  else return false
}




upgradeProprety(){
  if(this.MaxLvl()>this.proprety.lvl){
    this.proprety.upgradeProprety()
    
  }
}





takeMapProprety(){
  this.proprety.takeProprety();
  currentData.proprety.push(this)
} 



middlePoint(){
  let middle = Math.floor(this.size / 2);

   return [middle,middle]
}


possiblePoints(){
let possiblePoints=[]





}






// mapLvl 


MaxLvl(){

return Math.ceil(this.size/2);

}










// tiling




currentTile(){
  return this.tiles[this.cord[1]][this.cord[0]];
}


startingMap (){
  this.tiles[this.cord[0]][this.cord[1]].sit();

}






CreateProprety(){
  let newProprety =new proprety('',1,this)




  return newProprety


}


putTheSameTile(type,whereToPut){
console.log(type);
console.log(whereToPut)


}







putWaterTiles(arr){

  arr.forEach((elment,index)=>{
    this.putTile(elment[1],elment[0],new waterTile(true,[],elment[2]))

  })
}



waterRow(rowNom,waterLvl){
  for (let i=0;i<this.size;i++){
    this.putTile(i,rowNom,new waterTile(true,[],waterLvl))
  }

}







NaturalPrisimTile(rescursce,x,y){
  let NaturalPrisims =new NaturalPrisim(rescursce,[])
  this.putTile(x,y,new tile(false,['NaturalPrisim',NaturalPrisims]))}






disableTiles(disabledTiles){    //taking array of arrayies of [1x2 matrichs ]
    let simplearray=disabledTiles;

     if(disabledTiles!=null){
    simplearray.map((element,key)=>{
    if (!element[0]<=this.size &&element[1]<=this.size){
        this.tiles[element[1]][element[0]].Climable=false
    }

    else      return false
    })
  }
}



disableCouluom(rowNum,noarray){
  let noToDisable=noarray;
  let disabled =[];


  for (let i=0;i<=this.size;i++){
    if(noToDisable.includes(i)){
      disabled.push([rowNum,i])

    }



  }



  this.disableTiles(disabled);

}













putTile(x,y,tiling){
    this.tiles[y][x]=tiling
}



finished(){

  

  if (this.tiles[this.move[0]][this.move[1]].travelled){
    return true}



    else return false
  
}






//map traveling



canSeeeTile(x,y){
  if(this.distance(x,y)<=1){
    return true
  }
  else return false 
}



    distance(x1, y1) {
      let distance = Math.round(Math.sqrt((x1 - this.cord[0]) ** 2 + (y1 - this.cord[1]) ** 2));
      return distance;
    }


    moveInMap(whichDirection){
      this.tiles[this.cord[0]][this.cord[1]].sit()

        switch (whichDirection){
            case 'down':   this.cord[1]++     ;/*cheak which tiles you know or not  */  break;
            case 'up':    this.cord[1]--; break;
            case 'left':    this.cord[0]--;; break;
            case 'right':    this.cord[0]++; break;

        }
        this.tiles[this.cord[0]][this.cord[1]].sit()


    }

    Discoverd(){
   let FullAmountInMap=0;
   let notAvailble=0 ;
   let notSetON=0;
   let didSetOn=0;




   for (let x=0;x<this.size;x++){   
    for(let y=0;y<this.size;y++){
      FullAmountInMap++


      if (!this.tiles[x][y].Climable){
        notAvailble++
      }


      if (this.tiles[x][y].travelled==false){
        notSetON++
      }

   if (this.tiles[x][y].travelled==true){
    didSetOn++
      }
    }}



   return [FullAmountInMap,notAvailble,notSetON,didSetOn]
    }




    HowMuchWood (){
      let blackwood =0
      let blackWoods =[]
      for (let x=0;x<this.size;x++){   
        for(let y=0;y<this.size;y++){ 
         if(this.tiles[x][y].Events.length!==0&&this.tiles[x][y].Events[0]=='blackWood'){
          console.log(this.tiles[x][y])
          blackWoods.push([[x,y]])
          blackwood+=this.tiles[x][y].Events[2]
         }
         }
        }
        return  blackwood
    }


    howManyContainer(){
    let conatinter = 0
      for (let x=0;x<this.size;x++){   
        for(let y=0;y<this.size;y++){ 

          if(this.tiles[x][y].Events.length!==0&&this.tiles[x][y].Events[0][1]=='chest'){
            conatinter++


 

          }






        }}
      

        return conatinter
    }





    DiscoverdPer(){
      let discoverdData =this.Discoverd();
     
      return        Math.round(((discoverdData[3]/(discoverdData[0]-discoverdData[1]))*100))
      ; 
    }







    isCliamable(type){

      //console.log(this.tiles[this.cord[0]][this.cord[1]+1].Climable)
      switch (type)
      {case 'up':if (this.cord[1]==0||(this.tiles[this.cord[0]][this.cord[1]-1]&&!this.tiles[this.cord[0]][this.cord[1]-1].Climable)){  return false} return true
      case 'down':if (this.cord[1]==this.size-1||(this.tiles[this.cord[0]][this.cord[1]+1]&&!this.tiles[this.cord[0]][this.cord[1]+1].Climable)    ){  return false} return true
      case 'left':if (this.cord[0]==0||(this.tiles[this.cord[0]-1][this.cord[1]]&&!this.tiles[this.cord[0]-1][this.cord[1]].Climable)){return false} return true 
      case 'right':if (this.cord[0]==this.size-1||(this.tiles[this.cord[0]+1][this.cord[1]]&&!this.tiles[this.cord[0]+1][this.cord[1]].Climable)){return false} return true 
    
      }



    }


  
   



























     





 




    





    }











export default Map;