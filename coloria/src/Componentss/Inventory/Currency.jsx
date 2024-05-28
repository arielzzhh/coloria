export function Currency({color}){


    return(<svg viewBox="0 0 500 100" style={{backgroundColor:color}} width={500} >
        <rect cx={50} cy={50} r={75} fill={'yellow'}></rect>
        <text  x={50} cy={50} textAnchor="center" >366</text>

    </svg>)
}



export default  Currency