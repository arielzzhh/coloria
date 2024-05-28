import ElmentalSpell from "../../../Script/bulb/Spells/elmentalSpell";
import EnhancementSpell from "../../../Script/bulb/Spells/EnhancementSpell";
import restoringSpells from "../../../Script/bulb/Spells/restoringSpells";
import TransformationSpell from "../../../Script/bulb/Spells/TransformationSpell";
import Spellicon from "./Spellicon";

export function TypedSpell ({Spell}){






switch (Spell.constructor.name){
    case 'ElmentalSpell' :return <Spellicon x={55} y={35}></Spellicon>;
    case 'EnhancementSpell' :return <Spellicon x={35} y={15}></Spellicon>;
    case 'restoringSpells' :return <Spellicon x={26} y={31}></Spellicon>;
    case 'TransformationSpell' :return <Spellicon x={53} y={25}></Spellicon>;

}


}


export default TypedSpell;