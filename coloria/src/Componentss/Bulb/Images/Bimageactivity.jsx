export function Bimageactivity ({bulb}){



    switch (bulb.activity){
        case ("sitting"):
        return (<><circle cx={15} cy={10} r={5}></circle>
        <line stroke="black" x1={12} x2={20} y1={16} y2={16}></line>
  <line stroke="black" x1={24} x2={19} y1={0} y2={20}></line>
  <text stroke="black" fontSize={9} y={4} x={1} >z</text>
  <text stroke="black" fontSize={9} y={6} x={6} >z</text> </>)
     case ("traveling"):
        return (<>
        <circle cx={15} cy={10} r={5}></circle>
      <line x1={22} y1={14} x2={27} y2={14} stroke="black"></line>
      <line x1={23} y1={12} x2={25} y2={12} stroke="black"></line>
      <line x1={24} y1={10} x2={28} y2={10} stroke="black"></line>
  </>)
}
}

export default Bimageactivity;