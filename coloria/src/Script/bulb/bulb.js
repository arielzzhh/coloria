import { currentData } from "../Data/Data";
import Mat from "../util/Mat";
import { GameData } from "../Data/FrontEndData/GameData";
import { AllBulbs } from "../Data/WorldData";







export class bulb {
constructor(BornStats1x2,name1x2,lvl,gene1x5,rgbGene1x3,rgb1x3,skillsNx3){
  //static
    this.dayBorn =BornStats1x2[0]
    this.locationBorn =BornStats1x2[1]   // BlackWoods 
    this.name=[name1x2[0],name1x2[1]]
    this.level=lvl
    this.exp=[0,15]    //currentLvl ,curExperiance ,lvlupExp
  //genes
  this.genes=gene1x5             //  0-growth Gene  //1-smartGene //strangthGene //agileGene     //min 1 max mk
  this.rgbGene=rgbGene1x3
//personality 
this.personalityies =[]

this.BackgroundStories =[]
this.msg=[]

this.ActiveSkills =[]
this.PassiveSkills =[]




    //rgbValues
    this.rgb=rgb1x3
    //Status
    this.activity= 'sitting'//sitting/moving/
    this.isAlive =true;
    this.hp= [15,15]                            
    this.stamina= [15,15]                            
    this.magica= [15,15]                            

    this.size =15    // min=7 //max = 40 
    this.pysicalState=100
    this.mood=5;
    this.Dead =false
    this.previewdDmg =12
    
    //skills
    this.skills=skillsNx3
    //training 
    this.trainingSpesific =''   
    //equipment
    this.weapon =null;
    this.headGear=null;
    this.belt=null
    this.jumper=null
    //battle 
    this.Gear=0
    this.Path=15
    this.Energy=[]
    this.CPoints=1
    this.CPointsPer=90
    this.Effect=[]     
    this.physicalBar=100;

    this.history =[]


this.hp[0]=this.maxHp();
this.hp[1]=this.maxHp();


currentData.AllBulbs.push(this)




}
//history biography




// add


enterWorldPull(){
  if(currentData!==null&&currentData.AllBulbs!==undefined){
    currentData.AllBulbs.push(this)
  }
  
}



keepInfo(){
let copy ={...this}




}
//   bulb
maxHp(){
 let red =this.rgb[0];
 let size=this.size
 let lvl =this.exp[0]


 return (10+(red*1.04)+(size*0.32))+10*lvl ;


}
getEffect(type,Power,time){
  this.BattleEffect.push([type,Power,time])
}
available(){
  switch(true){
    case (this.activity== 'sitting'):
  return true
  case (this.activity== 'traveling'):
  return false
  case (this.activity[0]=='returning'):
  return false
  }
  }
  picked(key){
  if(currentData.pick.nextPicker.includes(key)){
    return true
  }
  
    else return false ;
  }
  ageGroup(){
    if(this.age()<=6&&this.age()>=0){
    return 'baby';}
    if(this.age()<=24&&this.age()>=6){
    return 'kid';}
    if(this.age()<=61&&this.age()>=24){
    return 'youngAdult';}
    if(this.age()<=146&&this.age()>=61){
    return 'adult';}
    if(this.age()<=194&&this.age()>=146){
    return 'senior';}
    if(this.age()>=194){
      return 'old';}
  }
  age(){
  
      return currentData.Date.day-this.dayBorn;
  }
  //hp
  HpPer(){
    return this.hp[0]/this.hp[1]*200
  }
  gainHp(amount){
    this.hp[0]+=(amount);
    if (this.hp[0]>this.hp[1]){
      this.hp[0]=this.hp[1]
    }
  
  }
  loseHp (amount){
  
  this.hp[0]-=(amount);
  
  
    if(this.hp[0]<=0){
      this.isAlive=false;
  
    }
  
  }
  //stamina
  staminaPer(){
return this.stamina[0]/this.stamina[1]*200
  }
  canUseStamina(amount){
    if (this.stamina[0]>=amount){
      return true
    }
    return false
  }
  useStamina(amount){
if(this.canUseStamina(amount)){
  this.stamina[0]-=amount
}

  }
//magica
  magicPer(){
   return this.magica[0]/this.magica[1]*200
  }

  canUseMagica(amount){
    if (this.magica[0]>=amount){
      return true
    }
    return false
  }
  
  useMagica(amount){
    if(this.canUseStamina(amount)){
      this.magica[0]-=amount
    
  }
  }


gainXp(amount){
  this.exp[1]+=amount;


  if (this.exp[1]>=this.exp[2]){
    this.lvlUp()
  }


}
lvlUp(){
  this.exp[0]++;
  this.exp[1]=0;
  this.exp[2]=50;


}
//item
equipHead(item){
  if(item!==null){
  this.headGear=item
}}
equipbelt(item){
  if(item!==null){
  this.belt=item
  }
}
equipjumper(item){
  if(item!==null){
  this.jumper=item
  }
}
equipWeapon(item){
  if(item!==null){
  this.weapon=item

  
}}
equipItemBasedOnItem(item){


  if (item.constructor.name=='hat'){
    this.equipHead(item);
  }
  if (item.constructor.name=='belt'){
    this.equipbelt(item);
  }
  if (item.constructor.name=='jumper'){
    this.equipjumper(item);
  }
  if (item.isWeapon()){
    this.equipWeapon(item);
  }




}
equipThreeArmor(head,belt,jumper){
  this.equipHead(head);
  this.equipbelt(belt);
  this.equipjumper(jumper);


}
gainEffectFromPotion (potion){
  potion.Instanteffects.forEach(element => {
    console.log(element)
    
  });

}


canUseTool(){
  if (this.canUseStamina(this.weapon.cost)){
    return true
  }

  else return false
}


useTool(){
  this.useStamina(this.weapon.cost)
}

//roster handaling 
PartOfRoster(){
  return currentData.roster.includes(this) ?  true  :false
    }



 ReturnNumberInRoster (){
  var index = currentData.roster.indexOf(this);

  if(currentData.roster.includes(this)){
    return index



  }
else return false
 }


 cheakIfInArray(whichArray) {
  switch(whichArray){
    case 'Team' : return currentData.Team.includes(this);
    case 'Enemy' : return currentData.battle.Enemy.includes(this);

}
}


TeamIndex(){
if(this.cheakIfInArray(true)||this.cheakIfInArray(false)){
  
}


}




//training

DaySizeGrouth(){   //groth
  let dayGrouthBase =0.01
  switch (this.ageGroup()){
  case 'baby':
    dayGrouthBase+=0.4
    case 'kid':
    dayGrouthBase+=0.2
    case 'youngAdult':
    dayGrouthBase+=0.05
      case 'adult':
    dayGrouthBase+=0
        case 'senior':
    dayGrouthBase+=0
      case 'old':
    dayGrouthBase+=0
      }
    this.size+=dayGrouthBase*GameData.Multyplayers.SizeGeneMulty[this.genes[0]-1];

}

trainingMulty(){
  let ageMultyplayer =0
  switch (this.ageGroup()){
  case 'baby':
    ageMultyplayer+=2
    return ageMultyplayer
    case 'kid':
      ageMultyplayer+=1
      return ageMultyplayer
      case 'youngAdult':
      ageMultyplayer+=0.5
      return ageMultyplayer
      case 'adult':
        ageMultyplayer+=0.25
        return ageMultyplayer
        case 'senior':
          ageMultyplayer-=0.05
          return ageMultyplayer
          case 'old':
        ageMultyplayer-=-0.5
        return ageMultyplayer}
} 

trainingMultyaDiffrence(){
  return Mat.random(this.trainingMulty()*95,this.trainingMulty()*105)/100
}

trainingOption(){
  let PossibleOption =['','weaponCraft','armorCraft','Coocking','alchemy','unarmed']

  if(this.weapon!==null){

  PossibleOption.push(this.weapon.constructor.name)
  }


  return PossibleOption
}


weaponBasedDay(trainingIntensity){
  if(this.weapon!==null){
  this.gainNewSkills(this.weapon.constructor.name,trainingIntensity) 
  }
  if(this.weapon==null){
    this.gainNewSkills('unarmed',trainingIntensity) 
    }
}

dayTrain(){
  let baseTraining =this.trainingMulty();
  this.weaponBasedDay(baseTraining*4);

  if(this.trainingSpesific==''){
    this.weaponBasedDay(baseTraining*2);

  }
  if(this.trainingSpesific!==''){
    this.weaponBasedDay(baseTraining*2);
    this.gainNewSkills(this.trainingSpesific,baseTraining*4) 
  }

}





//skills 
haveSkill(skillName) {
  return this.skills.findIndex((element) => {
    return element[0] === skillName;
  });
}
howStrongisSkill(skillName){
  let index =this.skillName(skillName);
  return this.skills[index]
}
gainNewSkills(skill,Gain){
  if(this.haveSkill(skill)==-1){
    this.skills.push([skill,1,Gain,[]])
  }
  else 
  this.skills[this.haveSkill(skill)][2]+=Gain
}
gainMultySkills (array1x2){
  array1x2.forEach((elment)=>{
    this.gainNewSkills(elment[0],elment[1]);
  })
}

//preview Dmg
previewRestart(){
  this.previewdDmg=0
}

updatePreviewDmg(amount){
  this.previewdDmg=amount

}


//stats



physicalDmg(){
  let physicalDmg =0
if(this.weapon.pysical!=null){
   physicalDmg +=this.weapon.pysical;
    physicalDmg+=this.weapon.AmountPerks('basepysical')}
  return physicalDmg 
} 
physicalArmors(){
let physicalArmor=0;
if (this.headGear&&this.headGear.pysical) { physicalArmor += this.headGear.pysical ; 
  physicalArmor+=this.headGear.AmountPerks('basepysical')

}
if (this.belt&&this.belt.pysical ) { physicalArmor += this.belt.pysical ; physicalArmor+=this.belt.AmountPerks('basepysical')
;}
if (this.jumper&&this.jumper.pysical) {physicalArmor += this.jumper.pysical;  physicalArmor+=this.jumper.AmountPerks('basepysical')
} 



return physicalArmor 
}
colorDefence(RgbNum){   //0 1 2
let reutrnValue =this.rgb[RgbNum];
if(this.headGear!=null){reutrnValue+=this.headGear.AmountPerks(Mat.returnColorName(RgbNum)); }
if(this.belt!=null){reutrnValue+=this.belt.AmountPerks(Mat.returnColorName(RgbNum)); }
if(this.jumper!=null){reutrnValue+=this.jumper.AmountPerks(Mat.returnColorName(RgbNum)); }



if(this.headGear && this.headGear.rgb[RgbNum]){




  reutrnValue +=this.headGear.rgb[RgbNum]}
  if(this.belt && this.belt.rgb[RgbNum]){
    
    reutrnValue +=this.belt.rgb[RgbNum]}
  if(this.jumper && this.jumper.rgb[RgbNum]){

  reutrnValue +=this.jumper.rgb[RgbNum]}








 return reutrnValue }
 colorAttack(colorIndexd){
  let value = this.rgb[colorIndexd]
  value +=this.weapon.rgb[colorIndexd]
  return value 
 }
 //critical
criticalChance(){
let cc = 5
cc+=this.weapon.AmountPerks('criticalchance')
if(this.headGear!=null ){
  cc+=this.headGear.AmountPerks('criticalchance')}
  if(this.belt!=null ){
    cc+=this.belt.AmountPerks('criticalchance')}
    if(this.jumper!=null ){
      cc+=this.jumper.AmountPerks('criticalchance')}
return cc
}
criticalPower(){
let cc = 2.00
cc+=this.weapon.AmountPerks('criticaldmg')*1/100
if(this.headGear!=null ){
cc+=this.headGear.AmountPerks('criticaldmg')*1/100}
if(this.belt!=null ){
cc+=this.belt.AmountPerks('criticaldmg')*1/100}
if(this.jumper!=null ){
cc+=this.jumper.AmountPerks('criticaldmg')*1/100}   
return cc
}
CriticalHit(){
  let randomNumber =Mat.random(0,100);

  if (randomNumber>this.criticalChance()){
    return 1;
  }
  else return this.criticalPower();

}

//color Points
gainColorPoint(){
  if(this.CPointsPer>100){
    this.CPoints+=1

    this.CPointsPer=0;
  }
  if(this.CPointsPer<0){
    this.CPoints-=1

    this.CPointsPer=95;
  }
}
gainColorExperiance(amount){
  this.CPointsPer+=amount;


  this.gainColorPoint()
}
loseColorExperiance(amount){
  this.CPointsPer-=amount;
  this.gainColorPoint()


}
losephysicalBar(amount){
  this.physicalBar -=amount


  if(this.physicalBar<=0){
    this.stunned();
  }

}

// effects
stunned(){
  this.BattleEffect.push(['stunned',3])
}
getphysicalTrait(){
  let num =Mat.random(0,2);
  switch (num){
  case 0:
    this.BattleEffect.push(['pale',5])
return 'pale'
case 1:
  this.BattleEffect.push(['weak',5])
return 'pale'
case 2:
  this.BattleEffect.push(['weak',5]);
return 'pale'

  }

}
CheakEffectTaking(){
  let result = this.BattleEffect.some((elment,indexi)=>{
    return elment[0] === 'stunned'

  })
console.log(result)

  return result


}
losePysycalState (amount){
  this.pysicalState-=amount;
}

//battle



canAttack(){
  return this.Path >= 200;
}
finishBattleTurn(){
  this.Path=0;
  
}
shouldStop (){
    if (this.Path>=200){
      currentData.battle.nextAttacker =this
        return true;
    }


}
moveInBattle(){
  let pathBase =this.rgb[2]*1.25+2


  this.Path+=pathBase
}



















}


export default bulb;