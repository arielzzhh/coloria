import BuilduingTab from "./BuilduingTab";
import PropretyInfo from "./PropretyInfo";
import RosterTab from "./RosterTab";
import PropretyInventory from "./PropretyInventory";

export function PropretyTab({propretyTab,setPropretyTab,update}){

switch (propretyTab){
case '':
return(<PropretyInfo update={update}></PropretyInfo>)
case 'Builduings':
return(<BuilduingTab update={update}></BuilduingTab>)
case 'roster':
return(<RosterTab update={update} ></RosterTab>)
case 'Inventory':
return(<PropretyInventory update={update}></PropretyInventory>)






}

    return(<>dsadasdasas</>)
}

export default PropretyTab;