
export function BulbScene ({cx,cy,text}){



    return(<>
    <circle cx={cx} cy={cy} r={15} fill="color"></circle>
    <text x={cx*1.30} y={cy}>{text}</text>
    
    </>

)
}


export default BulbScene