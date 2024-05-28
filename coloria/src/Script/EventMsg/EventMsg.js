import Scene from "../Scene/Scene";

export class EventMsg {
constructor(msg,options,Scenes,reqired,dayEvent){
this.msg =msg;
this.options=options;
this.Scenes=Scenes
this.state=0

this.reqired=reqired;
this.dayEvent=dayEvent



//status
this.finished=false
this.Read=false
}




passOne (){
    this.state ++


  if(this.state==this.options.length){
    this.finishEvent();

  }

}


finishEvent(){
    this.finished=true;

}




}


export default EventMsg