import ItemType from "./ItemType"
import TitleType from "./TitleSpesific/TitleType"


export function SvgFilter ({current,itemShown}){





switch (current){
case 0:
    return  (<ItemType itemShown={itemShown}></ItemType>)
case 1:
return  (<TitleType itemShown={itemShown}></TitleType>)


}






}



export default SvgFilter