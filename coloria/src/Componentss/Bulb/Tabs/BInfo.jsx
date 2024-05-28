import Typography from '@mui/material/Typography'
import { Box, Grid,Table, TableCell, TableRow } from '@mui/material';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';

export function Binfo({bulb}) {
    return (
        <>

      <Typography  color="initial">{'name : '+bulb.name[0]}</Typography>
      <Typography style={{background:'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,50,50,1) 33%, rgba(255,100,100,1) 100%)'}} fontSize={'45px'}>{bulb.hp[0]+'/'+bulb.hp[1]}</Typography>
      <Typography style={{background:'linear-gradient(90deg, rgba(125,125,15,1) 0%,  rgba(15,127,128,1) 50%)'}} fontSize={'1.3em'}>{bulb.activity}</Typography>


    <div style={{display:'flex',justifyContent:'space-evenly',height:'10%',width:'100%'}}>
    <div  style={{width:'75%'}}>{bulb.mood}</div>
    <div  style={{width:'75%'}}>sad</div>
    <div  style={{width:'75%'}}>sad</div>
    </div>

  
        </>
    );
}

export default Binfo;