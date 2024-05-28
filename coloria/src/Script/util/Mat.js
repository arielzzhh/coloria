import { currentData } from "../Data/Data"



export class Mat{

static arrayNull (amount){
  let array= []
for (let i=0;i<amount;i++){
  array.push(null)
}


return array

}




  static Background (bulb,number){
    if( bulb.available()==false){
      return 'red'
    }

    else {

    if(currentData.pick.nextPicker.includes(number)){
      return'blue'
    }


    return 'green'


  }


  }







  static Name (array){
    return array[Mat.random(0,array.length-1)]

  }





static returnRgb(red,green,blue){


  return [red,green,blue]
}

static returnRgbName(red,green,blue){


  return  `rgb(${red},${green},${blue})`
}





  static indexIsPart (number,array){
    return array.includes(number);
  }




  static compere (a,b){
    console.log(a);
    console.log(b);
  }



  static returnColorName (number){
    switch (number){
      case 0 :return 'baseRed' ;
      case 1 :return 'baseGreen' ;
      case 2 :return 'baseBlue' ;

   
   
    }
  }



static random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

static randomRange(middlePoint,range){
  return Mat.random(middlePoint-range,middlePoint+range)

}






}




export default Mat