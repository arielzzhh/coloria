
import { useState } from 'react';
import { Rating ,FormGroup,FormControlLabel,Checkbox, Stack} from '@mui/material';
import { StarIcon } from 'lucide-react';
import { LineChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line } from 'recharts';


export function  TrainingRecord ({bulb}){
  const [currentWatch,setCurrentWatch]=useState([])




function CreateNewArray(){
  let data =[]






  return data
}

    
  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
 
  ]


return(<Stack direction={'row'} justifyContent={'space-evenly'}>




 

<LineChart width={730} height={250} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  <Line type="monotone" dataKey="amt" stroke="#82ca9d" />

</LineChart>







<FormGroup>
  {bulb.skills.map((elment,index)=>(
    <>
  <FormControlLabel control={<Checkbox  />} label={elment[0]} />
  </>
))}

</FormGroup>





</Stack>)


}




export default TrainingRecord;

























