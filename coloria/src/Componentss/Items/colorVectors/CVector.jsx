import { Circle } from "lucide-react"
import { Pyramid } from "lucide-react"

export function CVector ({color,amount}){

    return(<p><Pyramid stroke="transplent" fill={color}></Pyramid>{amount}</p>)
}



export default CVector