import createItem from "../../Creation/createItem"
import inventory from "../../Handaling/inventory"

export class haverest {


static WoodAmount (){
    return [0,1,3,5,7]
}


static havrestingWood (havrestObject,bulbHavresting){
    if(bulbHavresting.canUseTool()){
        inventory.GainItem(createItem.StaticResource(havrestObject[0],haverest.WoodAmount()[havrestObject[2]]))
    havrestObject[2]--
   bulbHavresting.useTool()
   




    }
}
}


export default haverest