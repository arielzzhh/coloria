import { Pyramid } from "lucide-react";



export function Powder({color,amount,W,font}){

return(<>
<Pyramid fill={color} ></Pyramid> <p>{amount}</p>

</>)



}



export default Powder;