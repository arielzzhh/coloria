import AdventureBoaerd from "./AdventureBoaerd/AdventureBoaerd";
import AdventureInfo from "./AdventureInfo";
import PropretyBoeard from "./PropretyBoeard";
import Crafthing from "./Crafthing";
import Trainining from "./Training";
import Proprety from "./Proprety"
import CreateGear from "./Crafthing/CreateGear";
import Scout from "./Scout";
import Hire from "./Hire/Hire";
import Inbox from "./Inbox/Inbox";
import CreateSupply from "./Crafthing/CreateSupply";
import { useState } from "react";
import Budgets from "./Budgets";


export function Tab ({tab,setTabiName,}){
    const [propretyViewd,setpropretyVied] =useState(0)



switch (tab){
case '':
return <Inbox   setTabiName={setTabiName} ></Inbox>
case 'AdventureBoaerd' :
return <AdventureBoaerd     setTabiName={setTabiName}></AdventureBoaerd>
case 'AdventureInfo' :
return <AdventureInfo   setTabiName={setTabiName}></AdventureInfo>
case 'Proprety'  :
return <Proprety   proprety={0}  setTabiName={setTabiName}    ></Proprety>
case 'PropretyBoeard'  :
return <PropretyBoeard setpropretyVied={setpropretyVied}  setTabiName={setTabiName}   ></PropretyBoeard>
case 'Crafthing'  :
return <Crafthing  setTabiName={setTabiName}  ></Crafthing>
case 'Trainining'  :
return <Trainining u setTabiName={setTabiName}     ></Trainining>
case 'CreateGear'  :
return <CreateGear  setTabiName={setTabiName}   ></CreateGear>

case 'Scout':
return <Scout  setTabiName={setTabiName}   ></Scout>
case 'Hire':
return <Hire  setTabiName={setTabiName} ></Hire>
case 'CreateSupply':
return <CreateSupply  setTabiName={setTabiName} ></CreateSupply>
case 'Budgets':
return <Budgets  setTabiName={setTabiName} ></Budgets>







}
}

export default Tab;