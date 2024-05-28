import { Pyramid } from "lucide-react"

export function Price ({color,amount}){


return(<>
<Pyramid style={{fill:color}}></Pyramid> <p>{amount}</p>
</>)

}



export default Price



