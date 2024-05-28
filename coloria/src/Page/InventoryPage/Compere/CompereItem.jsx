import { Swords } from "lucide-react"
import GearCompere from "./GearCompere"
import NoGear from "./NoGear"
 

export function CompereItem ({item,bulbIndex}){








    switch (true){
        case (item.isGear()==true):
            return (
            <GearCompere bulbIndex={bulbIndex} item={item}> </GearCompere>)
            
     
        
        
        case (item.isGear()==false):
        return (
        <NoGear bulbIndex={bulbIndex} item={item}>
      
        </NoGear>)
        
        
        
        
        
        
        
        }
}


export default CompereItem