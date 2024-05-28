import GameData from "../../Data/FrontEndData/GameData";
import bank from "../../Bank/bank";
import { currentData } from "../../Data/Data";
import { Allproprety } from "../../Data/WorldData";
export class proprety {
    constructor(name,lvl,Builduings,resident=[],inventory=[]){
        this.name=name;
        this.lvl=lvl;
        this.Builduings=Builduings
        this.CurrentUpdrage= [false,0];
        this.inventory =inventory
        this.resident=resident;
        


        //STATUS
        this.controller =null
        this.upgradeTime =null;

      for (let i=0;i<this.lvl;i++){
        
      }



currentData.Allproprety.push(this)





    }
    //total builduing Info 

FilterdBuilduing(constructor){
let array =this.Builduings.filter((elment,index)=>{
    return elment.constructor.name==constructor
})

  return array
}



 dayProprety(){
    this.Builduings.forEach(element => {
        if(element.status[0]==true){
            element.status[1]--
        if(element.status[1]<=0){
            element.FinishUpgrade();
            element.status=[false,0]
        }

        }
        
    });
 }






    maxAmountBulb(){
        let amount =3

    let houses = this.FilterdBuilduing('House')

    houses.map((elment,index)=>{
        amount+=elment.housing()
    })
    return  amount
    }



    maxAmountInventory(){
        let amount =3

    let houses = this.FilterdBuilduing('WearHouse')

  
    return  amount
    }

    extractPercentage(){
        let extractPerc =5
        return extractPerc
    }




    oneDayPrisim(array){
        let prisim=array
        let news=[]

        prisim.map((elment,index)=>{
            news.push([array[index][0],elment[1]*this.extractPercentage()/100 ])  
        })



        return news
    }









    takeProprety(){
         this.controller='self'
    }


    PossibleToBuildNew(){
        if (this.Builduings.length<this.lvl){
            return true
        }
    }




   







    //info 

    //lvl

   







    //movement 


    takeProprety (){
        this.controller ='self'
        currentData.proprety.push(this)

    }



//teritoryControll

    




    upgradeCost(){
        switch(this.constructor.name){
        case 'Settlement':
        return GameData.propretyTypes.settelment.price[this.lvl] 
   
        }
        return  this.constructor.name
    }

    upgradeProprety(){
       if( bank.CanIbuyAll( this.upgradeCost())){
        bank.lowerAllAmount(this.upgradeCost());

      
        this.lvl++;



       }

    }


}


export default proprety;