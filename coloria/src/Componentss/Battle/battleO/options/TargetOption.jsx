export function TargetOption({bulb}){

    console.log(bulb.weapon.nextAttack=='comboSword')


    switch (true){
        case bulb.weapon.nextAttack=='comboSword':
        return (<circle cx={25} cy={25} stroke="black" fill="black"></circle>)
        case bulb.weapon.nextAttack=='Trust':
        return (<circle cx={45} cy={25} stroke="black" fill="black"></circle>)
    }








}


export default TargetOption