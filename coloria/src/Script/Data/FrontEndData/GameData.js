


//proprety

  let settelment ={
    price:[['black',1],[['black',5]],['black',10],['black',15]]
}




let propretyTypes ={
    settelment:settelment

}




//builduings

const HouseInfo={
    housing :[0,1,2,4,7,11,15],
    Price:[[],[['black',4]],[['black',15]],[['black',35]],[['black',45]],[['black',65]]],
    Time:[2,4,6,8,10,12,14,16,18,20],
    constructCost :[[['black',35]]]

}

const wearHouseInfo={

    store :[0,100,200,400,600,800,1000],
    items:[0,5,10,20,40],
    Price:[[],[['black',20]],[['black',50]],[['black',100]],[['black',250]],[['black',500]]]
   , Time:[2,4,6,8,10,12,14,16,18,20]
   ,constructCost :[[['black',45]]]


}

const MineInfo={
    extract :[0,15,35,50,65,80,100],
    Price:[[],[['black',20]],[['black',50]],[['black',100]],[['black',250]],[['black',500]]]
    , Time:[2,4,6,8,10,12,14,16,18,20]
   , constructCost :[[['black',55]]]


}

const TrainingInfo={
    trainingImprove :[0,100,200,400,600,800,1000],
    Price:[[],[['black',20]],[['black',50]],[['black',100]],[['black',250]],[['black',500]]]
    , Time:[2,4,6,8,10,12,14,16,18,20]
   , constructCost :[[['black',65]]]


}
export const BuilduingInfo ={


    HouseInfo:HouseInfo,
    wearHouseInfo:wearHouseInfo,
    MineInfo:MineInfo,
    TrainingInfo:TrainingInfo

}















export let trainingO={
    crafthing :['weaponCraft','armorCraft','Coocking','alchemy'],
    Defence:[]






}




const allPerks ={
    weapon:['basepysical','criticalchance','criticaldmg'],
    armor:['basepysical','criticalchance','criticaldmg']
}
















 let Multyplayers ={
SizeGeneMulty :[0,80,0.85,0.90,0.95,1,1.05,1.1,1.15,1.20]
}

let Skills ={
    WeaponSkills:{
        unarmed:['unarmed'],
    range:['Bow','GiantSling','sling'],
    work:['axe','pickaxe'],
    magic:['orb'],
    meele:['DualWield','Hammer','katana','Sword'],
    },

    crafthingSkills:['weaponCraft','armorCraft','Coocking','alchemy']
}




 let preAllSkills = [Skills.WeaponSkills.range,Skills.WeaponSkills.work,Skills.WeaponSkills.magic,Skills.WeaponSkills.meele]








let perksList ={
    itemsTrait: ['basepysical','baseRed','baseGreen','baseBlue','criticalchance','criticaldmg','maxHp',]
}


const BulbTrait = ["Empathy", "Compassion", "Creativity", "Intelligence", "Resilience", "Courage", "Generosity", "Honesty", "Loyalty", "Optimism", "Patience", "Ambition", "Humility", "Adaptability", "Assertiveness", "Open-mindedness", "Perseverance", "Self-discipline", "Sensitivity", "Confidence", "Altruism", "Curiosity", "Authenticity", "Resourcefulness", "Tenacity"];















export let GameData ={
    AllSkills:preAllSkills,
    Multyplayers:Multyplayers,
    BulbTrait:BulbTrait,
    trainingO:trainingO,
    propretyTypes:propretyTypes

}














export default GameData









