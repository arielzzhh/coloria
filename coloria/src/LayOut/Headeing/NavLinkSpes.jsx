import LoginContext from "../../customhooks/loginContext";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";


export function  NavLinkSpes ({to,children}){


return( <NavLink to={to}>
    {({ isActive }) => (
      <Typography
        color={isActive ? "text.headerActive" : "text.headerColor"}
        sx={{ p: 2 }}
        variant="h6"
      >  {children}
      
      </Typography>)}</NavLink>)


}




export default NavLinkSpes ;