export function EquipedStatus ({bulb}){


function SwordFill(num){
    if(bulb.weapon.stack>num){
        return 'green'
    }

    else return 'black'


}







switch (true){
case bulb.weapon==null:
return(<></>)
case bulb.weapon.constructor.name=='Sword':
return(<>
<text x={200}>stacks</text>  
<circle cx={180} cy={55} r={7} fill={SwordFill(0)} ></circle>
<circle cx={200} cy={55} r={7} fill={SwordFill(1)} ></circle>
<circle cx={220} cy={55} r={7} fill={SwordFill(2)} ></circle>
<circle cx={240} cy={55} r={7} fill={SwordFill(3)} ></circle>
<circle cx={260} cy={55} r={7} fill={SwordFill(4)} ></circle>



</>)
case bulb.weapon.constructor.name=='DualWield':
return(<>  




<rect x={250} y={110} width={30} height={5}></rect>
<rect x={210} y={110} width={30} height={5}></rect>
<rect x={258} y={110} width={15} height={25}></rect>
<rect x={218} y={110} width={15} height={25}></rect>
<rect x={250} y={60} width={30} height={50} fill="grey"></rect>
<rect x={210} y={60} width={30} height={50} fill="grey"></rect>
<rect  x={250} y={60} width={30} height={bulb.weapon.charge/2} fill="red"></rect>
<rect    x={210} y={60} width={30} height={bulb.weapon.charge/2} fill="red"></rect>

</>)


case bulb.weapon.constructor.name=='Hammer':
return(<>

<rect x={250} y={80} width={30} height={5}></rect>




</>)


}



}