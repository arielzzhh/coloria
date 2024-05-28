export function Spellicon ({y,x,onclick}){


    return( <circle onclick={onclick} cx={15+y} r={11} cy={25+x} fill="green"> </circle> )
}


export default Spellicon