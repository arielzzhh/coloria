import React, { useState } from 'react';
import { Box, Button, FormControl, TextField } from '@mui/material';
import axios from 'axios'
import { validateRegisterSchema } from '../../../validation/registerValidation';
import {  useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });
const navigor =useNavigate()





 async function  register  (e){
e.preventDefault();

  try{
let registeri = await  axios.post('http://localhost:8000/users/register' , input)
navigor('/login')

  }

catch(error){

  console.log("error from axios",error);
  

}






 }





  const handleInputsChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });

    console.log(input)
  };


  const handleInputsBlur = (e) => {
    const { name, value } = e.target;
    const dataFromJoi = validateRegisterSchema[name]({ [name]: value });

    if (dataFromJoi.error) {
      setErrors((copyOfErrors) => ({
        ...copyOfErrors,
        [name]: dataFromJoi.error.details[0].message,
      }));
    } else {
      setErrors((copyOfErrors) => {
        const { [name]: removedError, ...remainingErrors } = copyOfErrors;
        return remainingErrors;
      });
    }
  };



  

  return (
    <Box>
      <p>Register</p>
      <form onSubmit={register} >
        <FormControl>
          <TextField
                        autoComplete="given-name"

           onBlur={handleInputsBlur}
            onChange={handleInputsChange}
            required
            variant="filled"
            id="name"
            name="name"
            label="Name"
            value={input.name}
          />
          <TextField
            onChange={handleInputsChange}
            onBlur={handleInputsBlur}
            required
            variant="filled"
            id="email"
            name="email"
            label="Email"
            value={input.email}
          />
          <TextField
           onBlur={handleInputsBlur}
            onChange={handleInputsChange}
            required
            variant="filled"
            id="password"
            name="password"
            label="Password"
            type="password"
            value={input.password}
          />
        </FormControl>
        <br />
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default RegisterForm;
