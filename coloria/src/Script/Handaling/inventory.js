import { currentData } from "../Data/Data";
import createItem from "../Creation/createItem";

export class inventory {


static LoseItem (item){
console.log(item)
let index = currentData.inventory.findIndex((elment,index)=>{
    return item===elment
})

if(index!==-1){
    currentData.inventory.splice(index,1);
}

}



static GainItem(item){
    currentData.inventory.push(item)

}
static StackGain (){
}











static WhatYouHave(type){
    let list=[];
    
    

    currentData.inventory.forEach((elment,index)=>{
        if (elment.constructor.name==type){
            list.push(elment)
        }


    })



    currentData.roster.forEach((elment,index)=>{
        if (elment.constructor.name==type){
            list.push(elment)
        }


    })



    return list
    
}








static howManyDoIhave(name){
    let amount =0;
    let IndexInInventory=[]
    currentData.inventory.forEach((elment,index)=>{
        if (elment.name==name){
            if(elment.isGear()==false){
              amount+= elment.amount
              IndexInInventory.push([index,elment.amount])
            }
        } 
        }
    )
    return [amount,IndexInInventory]


}


    
}


export default inventory