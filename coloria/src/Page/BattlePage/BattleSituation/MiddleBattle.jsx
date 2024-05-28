import TeamA from "../../../Components/Battle/ActionBulb/TeamA"
import BattleO from "../../../Components/Battle/battleO/battleO"
import BattleLog from "../../../Components/Battle/BattleLog/BattleLog"


export function MiddleBattle ({animate,setOptionMenu,OptionMenu,stop}){




    return(<>
    
    
    
    <svg
            style={{ backgroundColor: "rgb(180,160,130)" }}
            width={"1000"}
            viewBox="0 0 200 100"
          >
            <line x1={0} x2={200} y1={0} y2={0} strokeWidth={2} stroke="green"></line>
            <text x={3} y={3} fontSize={4}>start</text>
            <text x={190} y={3} fontSize={4}>finish</text>

            <TeamA></TeamA>        
           

  <BattleO Animate={animate} stoping={stop} setOptionMenu={(lig)=>{setOptionMenu(lig)}}  WeaponAttackFunction={(lig)=>{ setOptionMenu(lig)}} sit={OptionMenu}></BattleO>
          </svg>
    
    
    
          <BattleLog></BattleLog>

    
    
    
    
    </>)
}



export default MiddleBattle