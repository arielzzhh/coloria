import { Stack, Typography } from "@mui/material";
import { BulbBar } from "./BulbBar";
import { useState } from "react";

export function BulbTeamBar({ Team, titles }) {
  const [activeTeam, setActiveTeam] = useState(Team);

//  const aliveTeam = activeTeam.filter(element => element.isAlive);

  return (
    <Stack direction={'column'}>
      {activeTeam.map((element, key) => {
        
        return <BulbBar key={element + key} Bulb={element}></BulbBar>
        
        
        ;
      })}
    </Stack>
  );
}

export default BulbTeamBar;