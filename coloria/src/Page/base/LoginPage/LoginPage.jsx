import { Box,TextField,FormControl,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../../customhooks/loginContext";
import { useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export function  LoginPage(){
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();
  const { setLogin } = useContext(LoginContext);
  let currentUser;


  const handleEmailChange = (e) => {

    setEmailValue(e.target.value);
  };
  const handlePasswordChange = (e) => {
  
    setPasswordValue(e.target.value);
  };

const navigor =useNavigate();



 async function submit (e){
e.preventDefault();


try{


  let {data}  = await axios.post("http://localhost:8000/users/login", {
    email: emailValue,
    password: passwordValue
    
  })


  localStorage.setItem("token", data);

  currentUser = jwtDecode(data); 
 setLogin(currentUser);
 navigor('/game')

        

}



 catch (err) {
  setLogin(null);
  localStorage.clear();
  console.log('no')
  
}


  }



    
    
    
    return (
    <Box onSubmit={submit}>
  

      <p>Login</p>
      <form    >
        <FormControl  >
      
          <TextField
                    onChange={handleEmailChange}

            required
            variant="filled"
            id="email"
            name="email"
            label="Email"
            value={emailValue}
          />
          <TextField
           onChange={handlePasswordChange}

            required
            variant="filled"
            id="password"
            name="password"
            label="Password"
            type="password"
            value={passwordValue}
          />
        </FormControl>
        <br />
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign In
        </Button>
      </form>
    </Box>
  );
    
    
    
}


export default LoginPage