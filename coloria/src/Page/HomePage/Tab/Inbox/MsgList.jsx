export function MsgList ({msg}){



    return(<>
    
    {msg.msg.map((elment,index)=>(
        <p>{elment}</p>
    ))}
    
    
    </>)
}


export default MsgList