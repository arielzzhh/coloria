import adventure  from "../adventures/adventure";
import Mat from "../util/Mat";
import Objective from "../../Components/Map/Objective";
import objective from "../adventures/Objective/objectives";
import BulbSchemes from "./BulbSchemes";


export class CreateAdv {
    static Huntingnumber = 0;








    static CreateSimpleBattle(lvl, team,prize) {
        CreateAdv.Huntingnumber++; // Accessing the static variable using the class name


        let BattleObjective =new objective('battleObjective','battle',['battle',team],[])

        let HuntingAdventure = new adventure(
            `huntingMission${CreateAdv.Huntingnumber}`,
            lvl,
            lvl,
            'simple New Adventure Your ',
            [1, 5],
            [Mat.random(2, 4), 150],
            prize,
            [BattleObjective]
            
        );

        return HuntingAdventure;
    }
}


export default CreateAdv;