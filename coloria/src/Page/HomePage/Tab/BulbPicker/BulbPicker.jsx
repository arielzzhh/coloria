import React from 'react';
import BImage from "../../../../Components/Bulb/Images/BImage";
import { currentData,changePicker } from "../../../../Script/Data/Data";
import DataManipulate from '../../../../Script/util/DataManipulate';
import { Grid,Button, Stack, ButtonGroup, Typography} from "@mui/material"

function BulbPicker({ myData,onclick }) {




    return (
        <div>
            {currentData.roster.map((element,key) => (
                            <BImage    onClick={()=>{DataManipulate.changePicker(key)}} key={key} W={75} bulb={element} />
    
            ))} 
                      <Button  fullWidth variant='contained' >send Them</Button>

        </div>
    );
}

export default BulbPicker;