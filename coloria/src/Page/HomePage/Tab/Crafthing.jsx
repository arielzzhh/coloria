
import { Grid,Button, } from "@mui/material";



export function Crafthing ({setTabiName}){


    return(<>

    <Grid container spacing={0} >

     <Grid item xs={6}><Button fullWidth style={{ textTransform: 'lowercase' }} onClick={()=>{setTabiName('CreateGear')}} variant="contained">

        <svg viewBox="0 0 100 100" style={{width:'100px'}}>
        <rect x={49} width={8} y={65} height={22} stroke="black"></rect>
    <rect x={46} width={15} y={5} height={60} stroke="silver" fill="white"></rect>
    <rect x={35} width={40} y={57} height={8} stroke="silver" fill="white"></rect>
        </svg>

        <svg viewBox="0 0 100 100" style={{width:'100px'}}>
        <path d="M20 50 Q50 10 80 50" fill="#333" stroke="#000" stroke-width="2"/>
        </svg>

        create Gear
        
        
        
        
        </Button></Grid> 
    
    
    
    
    
    
    
    
    
    
     <Grid item xs={6}><Button fullWidth style={{ textTransform: 'lowercase' }} onClick={()=>{setTabiName('CreateSupply')}} variant="contained">
        
        
        
        
     <svg viewBox="0 0 100 100" style={{width:'100px'}}>


     <g id="Layer_1">
  <title>Layer 1</title>
  <rect id="svg_1" height="32.63158" width="11.57895" y="27.0426" x="45.63909" opacity="NaN" stroke="#000" fill="#fff"/>
  <ellipse stroke="#000" ry="0.90226" rx="5.56391" id="svg_2" cy="25.98997" cx="51.50375" fill="#fff"/>
  <rect stroke="#000" id="svg_4" height="17.44361" width="10.37594" y="41.92984" x="46.39097" fill="#ff0000"/>
 </g>
      


     </svg>


     Create Supply
  
        
        </Button></Grid> 

    
    </Grid>  
    
    
    
    
    
    
    
    </>)
}


export default Crafthing