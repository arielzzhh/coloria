export function TitleType ({itemShown}){




switch (true){
case (itemShown.isGear()==true):
return (
<>
<text fontSize={'0.5em'} x={5} y={10}>{itemShown.name}</text> 
<text fontSize={'0.5em'} x={5} y={25}>{'pysical Power :'}</text> 
<text fontSize={'0.5em'} x={75} y={25}>{itemShown.pysical}</text> 
<text fontSize={'0.35em'} fill="grey" x={85} y={10}>{itemShown.constructor.name}</text>
<circle cx={15} cy={35} r={5} fill="red" stroke="black"></circle>  <text x={11} y={60}>{itemShown.rgb[0]}</text>
<circle cx={45} cy={35} r={5} fill="green" stroke="black"></circle> <text x={41} y={60}>{itemShown.rgb[1]}</text>
<circle cx={75} cy={35} r={5} fill="blue" stroke="black"></circle> <text x={71} y={60}>{itemShown.rgb[2]}</text>
<rect x={75} y={75} height={25} width={25} fill="gold"></rect> <text  x={80} y={93}>{itemShown.value+'$'}</text>

</>)


case (itemShown.isGear()==false):
return (
<>
{console.log(itemShown.isGear()==false)}
<text fontSize={'0.5em'} x={5} y={10}>{itemShown.name}</text> 
<text fontSize={'0.35em'} fill="grey" x={85} y={10}>{itemShown.constructor.name}</text>
<rect x={75} y={75} height={25} width={25} fill="gold"></rect> <text  x={80} y={93}>{itemShown.value+'$'}</text>
<text  fontSize={'0.5em'} x={15} y={93}>{'amount :'+itemShown.amount}</text>
</>)



case (itemShown.isGear()==false&&itemShown.constructor.name=='arrow'):
return (
<>
<text fontSize={'0.5em'} x={5} y={10}>{itemShown.name}</text> 
<text fontSize={'0.35em'} fill="grey" x={85} y={10}>{itemShown.constructor.name}</text>
<circle cx={15} cy={35} r={5} fill="red" stroke="black"></circle>  <text x={11} y={60}>{itemShown.rgb[0]}</text>
<circle cx={45} cy={35} r={5} fill="green" stroke="black"></circle> <text x={41} y={60}>{itemShown.rgb[1]}</text>
<circle cx={75} cy={35} r={5} fill="blue" stroke="black"></circle> <text x={71} y={60}>{itemShown.rgb[2]}</text>
<rect x={75} y={75} height={25} width={25} fill="gold"></rect> <text  x={80} y={93}>{itemShown.value+'$'}</text>
<text  fontSize={'0.5em'} x={15} y={93}>{'amount :'+itemShown.amount}</text>
</>)







}
    
}


export default TitleType