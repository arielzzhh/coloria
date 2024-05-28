import LoginContext from "../../customhooks/loginContext";
import { useContext } from "react";
import NavLinkSpes from "./NavLinkSpes";
import { all,visitor, logedIn, } from '../LinksType'

export function  Links (){

    const { login } = useContext(LoginContext);    



 return (<>

 {all.map((elment,index)=>(
    <NavLinkSpes to={elment.to} children ={elment.children}></NavLinkSpes>
),)}


{login!==null&& 
logedIn.map((myItem, index) => (
<NavLinkSpes to={myItem.to} key={"linksnav2" + index}>
{myItem.children}
</NavLinkSpes>
        ))}



{login==null&& 
visitor.map((myItem, index) => (
<NavLinkSpes to={myItem.to} key={"linksnav2" + index}>
{myItem.children}
</NavLinkSpes>
        ))}



 
 
 
 </>)   




}






export default Links ;