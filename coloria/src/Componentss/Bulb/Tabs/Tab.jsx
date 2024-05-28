import Badventures from "./Badventures";
import BGear from "./BGear";
import Binfo from "./BInfo";
import BGene from "./BGene";
import Bskills from "./Bskills";
import Binteract from "./Binteract";

export function Tab ({Tab,Bulb}){

switch (Tab){
case 'info' :
return <Binfo bulb={Bulb}></Binfo> ;
case 'BRgb' :
return <BGene bulb={Bulb} ></BGene> ;
case 'BGear' :
return <BGear  bulbi={Bulb}></BGear> ;
case 'Bskills' :
return <Bskills bulb={Bulb}></Bskills> ;
case 'Badventures' :
return <Badventures bulb={Bulb}></Badventures> ;
case 'Binteract' :
return <Binteract bulb={Bulb}></Binteract> ;



}
    
}


export default Tab;