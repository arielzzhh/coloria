import { Button } from "@mui/material"
import CVector from "../../../../Components/Items/colorVectors/CVector"

export function NewBuilduingSlot({elment}){





    switch (elment[0]){
        case 'house':
        return(<Button variant="contained" >house
            <br />
            {elment[1].map((elmenti,index)=>(
 <CVector color={elmenti[0]} amount={elmenti[1]} ></CVector>

))}
    


        </Button>)
        case 'wearHouse':
        return(<Button variant="contained" >wearHouse
           {elment[1].map((elmenti,index)=>(
 <CVector color={elmenti[0]} amount={elmenti[1]} ></CVector>

))}
        
        </Button>)
        case 'trainingField':
        return(<Button variant="contained" >trainingField
           {elment[1].map((elmenti,index)=>(
 <CVector color={elmenti[0]} amount={elmenti[1]} ></CVector>

))}
        
        </Button>)
        case 'mine':
        return(<Button variant="contained" >mine
           {elment[1].map((elmenti,index)=>(
 <CVector color={elmenti[0]} amount={elmenti[1]} ></CVector>

))}
        
        
        </Button>)
                              

}

}
export default NewBuilduingSlot