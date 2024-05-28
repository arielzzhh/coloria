
import proprety from "../proprety/proprety";
import House from "../Builduings/BuilduingTypes/House";
export class Settlement extends proprety {
constructor(name,lvl,Builduings,resident,inventory){
    super(name,lvl,Builduings,resident,inventory)


    this.Builduings.push(new House('blackHouse Room',1


    ))


    this.BuildType =this.constructor.name

    

}


possibleBuilduings(){
    return [['house',[['black',35]]],['trainingField',[['black',35]]],['wearHouse',[['black',35]]],['mine',[['black',35]]]]
}


}


export default Settlement