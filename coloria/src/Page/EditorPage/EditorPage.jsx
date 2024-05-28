import { Stack,Box,FormControl,TextField,Button,Slider } from "@mui/material"
import { useState } from "react"


export function EditorPage (){
    const [input, setInput] = useState({
        name: '',
        value: '',
        rarity: '',
        description: '',
        pysical: '',
        rgb:[0,0,0]
      });




      const handleInputsChange = (e) => {
        const { name, value } = e.target;
        setInput({
          ...input,
          [name]: value
        });
    
        console.log(input)
      };
    
      
    



return (<Stack direction={'row'} justifyContent={'space-evenly'}>
<Stack>adsdsadsadassd</Stack>



<Stack>
    <p>createGear</p>
    <Box>
      <p>lgoin</p>
      <form  >
        <FormControl>
          <TextField   onChange={handleInputsChange} required variant="filled"  id="name"   name="name"    label="Name"    value={input.name}  />
          <TextField   onChange={handleInputsChange} required variant="filled"  id="value"   name="value"    label="value"    value={input.value}  />
          <TextField   onChange={handleInputsChange} required variant="filled"  id="rarity"   name="rarity"    label="rarity"    value={input.rarity}  />
          <TextField   onChange={handleInputsChange} required variant="filled"  id="description"   name="description"    label="description"    value={input.description}  />
          <TextField   onChange={handleInputsChange} required variant="filled"  id="pysical"   name="pysical"    label="pysical"    value={input.pysical}  />
          <Stack direction={'row'} justifyContent={'space-evenly'}>
          <Slider f aria-label="Temperature"defaultValue={30} color="secondary"/>
          <Slider aria-label="Temperature"defaultValue={30} color="secondary"/>
          <Slider aria-label="Temperature"defaultValue={30} color="secondary"/>
      
      </Stack>





        </FormControl>
        <br />
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign Up
        </Button>
      </form>
    </Box>


</Stack>



</Stack>)









}


export default EditorPage