import { Button, ButtonGroup, Stack } from "@mui/material"
import JhornalButton from "../../Components/jhornal/JhornalButton";

export function JournalPage(){



    return(<Stack direction={'row'}>
     <div style={{width:'20%'}}>dsa</div>
     <div style={{width:'30%'}}>
        <p>Objectives</p>
<JhornalButton text={'partOne'}></JhornalButton>


     </div>




     <div  style={{width:'50%'}}>
        <p>jhornal</p>
        <p>adventures</p>
        <Button fullWidth>tuturial</Button>
        <Button fullWidth>tuturial</Button>
        <Button fullWidth>tuturial</Button>
        <Button fullWidth>tuturial</Button>
     </div>


    </Stack>)
}


export default JournalPage;