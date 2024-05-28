import lore from "../item/Lore/lore";

export class tile {
    constructor( climb,Events){
        this.Climable=climb;
        this.travelled=false
        this.Events =Events




        /* 
        events can be
        [bulbs,typeOfEncouter]
                [bulbs,typeOfEncouter]

        
        
        
        */
 }




 // 
 EventMsg(){
if(this.Events.length!==0){



   if(this.Events[0][0].constructor.name=='EventMsg') {


      if(this.Events[0][0].finished==false&&this.Events[0][0].reqired)
         {return 'MustToFinish' }
     



   if(this.Events[0][0].finished==false )
    {return 'needToFinish' }


   if (this.Events[0][0].finished){
      return false
   }
   
   
   



   }
   return  false
}




return false
 }





CheakIfTheresBattle(){   //if there is return the team if not return null 
   let index =   this.Events.findIndex((elment,index)=>{
      return  elment[1]=='battle'
   })
   if(index!==-1){
  return [this.Events[index][0],index]
   }

   return null
}




BattleTileDefeted(){
   let index =   this.Events.findIndex((elment,index)=>{
      return  elment[1]=='battle'
}
)

if(index!==-1){
   

}


}










 addBulbs(team,type){
    this.Events.push([team,type])
 }





 addIChest(itemsList,amount,type){
    this.Events.push([itemsList,type,amount])

 }      //types = chest prize 



 sit(){
    this.travelled=true;
}




DeleteEvent(){
   this.Events.splice(0,1);

}










}



export default tile;