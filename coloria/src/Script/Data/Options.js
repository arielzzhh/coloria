export class Options {
 




    static SaveGame(){
        localStorage.setItem('user',JSON.stringify(currentData));
      
      }
      
      
      
      
      static returnLoadGame(){
      
      
        return JSON.parse(localStorage.getItem('user'))
      
      }
      
      static loadGame(){
      
        if(localStorage.getItem('user'!==null)){
        currentData =returnLoadGame();}
      }
      

}