import { currentData } from "../Data/Data"
import itemCreation from "../Creation/createItem";

export class bank {
static log(){
  }
static lowerAmountOne(color,amount){
  currentData.bank[bank.colorBankAssociciate(color)]-=amount;
}

static GainAmountOne(color,amount){
  currentData.bank[bank.colorBankAssociciate(color)]+=amount;
}
static GainItems(){
let creaton =[itemCreation.CreateArmor('hat',30,1,1),itemCreation.CreateArmor('jumper',30,1,2)]
creaton.forEach((elment)=>{
  currentData.inventory.push(elment)
})
}
static lowerAllAmount (costArray){
costArray.forEach((elment)=>{
  bank.lowerAmountOne(elment[0],elment[1]);
})
}




static turnGain(){
let dayGain =[]
let propretys = currentData.proprety
propretys.forEach((elment,index)=>{
 let thisGain=    elment.proprety.oneDayPrisim(elment.prisim)
 thisGain.forEach((elmenti,index)=>{
  dayGain.push(elmenti)
 })


 console.log(dayGain)


})


dayGain.forEach((elmentx,index)=>{
bank.GainAmountOne(elmentx[0],elmentx[1])

})





}













static colorBankAssociciate(name){
    switch(name){
    case 'black':
    return 0;
    case 'red':
    return 1;
    case 'green':
    return 2;
    case 'blue':
    return 3;
    case 'grey':
    return 4;
    case 'yellow':
    return 5;
    case 'magenta':
    return 6;
    case 'cyan':
    return 7;
    case 'white':
    return 8;
}
return false ;
}


static NumberBank(num){
  switch(num){
  case 0:
  return 'black';
  case 1:
  return 'red';
  case 2:
  return 'green';
  case 3:
  return 'blue';
  case 4:
  return 'grey';
  case 5:
  return 'yellow';
  case 6:
  return 'magenta';
  case 7:
  return 'cyan';
  case 8:
  return 'white';
}
return false ;
}



static canIbuy(color,amount){
   if(amount <=currentData.bank[bank.colorBankAssociciate(color)]){
    return true
  }
  else return false;
}




static CanIbuyAll(Prices) {
  for (let i = 0; i < Prices.length; i++) {
    let element = Prices[i];
    if (!bank.canIbuy(element[0], element[1])) {
      return false;
    }
  }
  return true;
}




static ifCanBuy (array){
if (bank.CanIbuyAll(array)){
  bank.lowerAllAmount(array);
  console.log('you can buy And Bought')
  return true



}

else 
console.log('you cant Buy ')
return false


}



 
}



















export default bank