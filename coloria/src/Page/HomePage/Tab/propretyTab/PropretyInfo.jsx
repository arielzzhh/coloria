
import { currentData } from "../../../../Script/Data/Data";
import { Stack,Button } from "@mui/material";
import bank from "../../../../Script/Bank/bank";
import CVector from "../../../../Components/Items/colorVectors/CVector";
import { MoveUp } from "lucide-react";

export function PropretyInfo ({update}){


    return(<>
    
    <Stack >

<div >


</div>


  <div>
<p>{currentData.proprety[currentData.pick.Proprety].proprety.name}</p>
<p>{/*'lvl:'+currentData.proprety[currentData.pick.Proprety].proprety.lvl}/{currentData.proprety[currentData.pick.Proprety].MaxLvl()*/}</p>

{console.log(currentData.proprety[currentData.pick.Proprety].proprety.inventory.length)}


<p>resident :{currentData.proprety[currentData.pick.Proprety].proprety.resident.length}/{currentData.proprety[currentData.pick.Proprety].proprety.maxAmountBulb()}</p>
<p>storage :{currentData.proprety[currentData.pick.Proprety].proprety.inventory.length}/{currentData.proprety[currentData.pick.Proprety].proprety.maxAmountInventory()}</p>
<p>extract :{currentData.proprety[currentData.pick.Proprety].proprety.extractPercentage()}%</p>


<Stack >
<Stack style={{backgroundColor:'silver',border:'black solid 2px'}} >
<p>naturalRescoursce</p>
<Stack direction={'row'} justifyContent={'center'}>
{currentData.proprety[currentData.pick.Proprety].prisim.map((elment,index)=>(
<CVector color={elment[0]} amount={elment[1]}></CVector>
))}
</Stack>
</Stack>

<Stack style={{backgroundColor:'silver',border:'black solid 2px'}} >
<p>extractEachDay</p>
<Stack direction={'row'} justifyContent={'center'}>
{currentData.proprety[currentData.pick.Proprety].prisim.map((elment,index)=>(
<CVector color={elment[0]} amount={elment[1]}></CVector>
))}
</Stack>
</Stack>




</Stack>

<Stack direction={'row'} justifyContent={'center'} >

<div style={{border:'black solid 1px'}}>
<Button disabled={!currentData.proprety[currentData.pick.Proprety].canUprade()||!bank.CanIbuyAll(currentData.proprety[currentData.pick.Proprety].proprety.upgradeCost())} onClick={()=>{currentData.proprety[currentData.pick.Proprety].upgradeProprety();update();}} variant="contained"><MoveUp/>    </Button>
<p>updrage cost :</p>
{currentData.proprety[currentData.pick.Proprety].proprety.upgradeCost().map((elment,index)=>(
<CVector color={elment[0]} amount={elment[1]}></CVector>
))}




</div>


</Stack>
</div>


<div >

</div>


</Stack>

    
    
    </>)
}

export default PropretyInfo