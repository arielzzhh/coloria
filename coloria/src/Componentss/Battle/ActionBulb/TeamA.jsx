import BulbA from "./BulbA"
import { currentData } from "../../../Script/Data/Data"
import BImage from "../../Bulb/Images/BImage";

export function TeamA (){



    return( <>


        {currentData.Team.map((element, index) => {
            return <BulbA  bulb={element} key={index}></BulbA>;
        })}
        {currentData.battle.Enemy.map((element, index) => {
            return <BulbA  bulb={element} key={index}></BulbA>;
        })}
    </>
    )
}


export default TeamA