
import { Stack,Grid } from "@mui/material"
import { useContext, useEffect, useState } from "react";
import LoginContext from "../../customhooks/loginContext";
import axios from "axios";

export function UserPage ({}){
    const { login } = useContext(LoginContext);    
   const [userInfo,setUserInfo] =useState();

   async function getInfo (){
    let info = await axios.get('http://localhost:8000/data/',
    {
        headers: {
          'Authorization': `${login._id}`,
          'token':`${login._id}`
        }
      }
          
      )

    setUserInfo(info.data)


    console.log(info.data)

   }






   useEffect(()=>{


getInfo()




   },[])







    return(<Stack >


{console.log(login._id)}




<Stack>userContext</Stack>
<Grid container spacing={2}>

<Grid item xs={12}>item</Grid>


</Grid>



<Stack>dsd</Stack>

<Stack>dsd</Stack>



    </Stack>)
}


export default UserPage