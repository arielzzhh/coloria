import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export  function TrainingOption({bulb}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    bulb.trainingSpesific=event.target.value
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{bulb.trainingSpesific}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}>
             {bulb.trainingOption().map((elment,index)=>(
                        <MenuItem value={elment}>{elment}</MenuItem>

             ))}

        
        </Select>
      </FormControl>
    </Box>
  );
}

export default TrainingOption;