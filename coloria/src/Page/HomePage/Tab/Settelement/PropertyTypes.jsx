import Mine from "./PropertyTypes/Mine";
import TrainingStation from "./PropertyTypes/TrainingStation";
import Powder from "../../../../Components/Items/colorVectors/Powder";
export function PropertyTypes({Proprety}){



    switch (Proprety.constructor.name){
        case ('Mine'):
        return (<Mine Proprety={Proprety} ></Mine>)
        case ('trainingStation'):
            return (<TrainingStation Proprety={Proprety} ></TrainingStation>
    
    
    
    
    
    
    
    )








    }
}


export default PropertyTypes;