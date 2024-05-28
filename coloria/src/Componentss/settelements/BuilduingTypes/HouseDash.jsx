import { Button } from "@mui/material"
import { Table } from "lucide-react"
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp"
import CVector from "../../Items/colorVectors/CVector"
import { Home}  from "lucide-react"

export function HouseDash ({Builduing}){


return(<>
<p>{Builduing.name}</p>
<p><Home /> { Builduing.housing()}</p>









</>)

}


export default HouseDash

//<CVector color={Element[0]} amount={Element[1]} ></CVector>
