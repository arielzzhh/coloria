export function InboxSmallMsg({elment,onClick}){


    return (<div onClick={onClick} style={{backgroundColor:'silver',border:'black solid 2px',fontSize:'1.5vh' , width:'20%',fontWeight:'1000'}} >
    <p>{elment.title}</p>

    </div>)
}


export default InboxSmallMsg