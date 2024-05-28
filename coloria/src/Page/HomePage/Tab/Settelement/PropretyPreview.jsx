import {Grid,Button} from '@mui/material'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import BlackHut from '../../../../globalImage/PropretyImg/blackHut.jpg'

export function PropretyPreview ({elment,onclick}){



    if(elment!==undefined){
console.log(elment)

        return(<div onClick={onclick} style={{border:'black solid 1px'}}>
        <p>{elment.name} </p>
    <p>{elment.constructor.name} </p>
    <p>lvl : {elment.lvl} </p>
    <img width={'100%'} src={BlackHut} alt="" />


    </div>)



    



}





    
    
    
    
}


export default PropretyPreview