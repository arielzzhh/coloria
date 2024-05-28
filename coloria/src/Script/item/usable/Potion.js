import resource from "../resource/resource";

export class potion extends resource{
    constructor(name,value,rarity,description,type,amount,Instanteffects,timedEffect){
    super(name,value,rarity,description,type,amount);
    this.Instanteffects=Instanteffects;
    this.timedEffect=timedEffect;
    }


gainInstantEffect(user){
    let nextEffect =this.Instanteffects[0];
    switch(nextEffect[0]){
     case 'restoreHp':
    user.gainHp(nextEffect[1])
    case 'restorepysical':
    user.gainHp(nextEffect[1])


    }

    this.amount--;

    if(this.amount--){
        
    }


}

}

export default potion