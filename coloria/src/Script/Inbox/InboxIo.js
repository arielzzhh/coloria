import { currentData } from "../Data/Data"


export class InboxIo {




  static  isThereRequired(){
    let isThere = currentData.Inbox.some((elment,index)=>{
     return (elment&&elment.EventMsg&&elment.EventMs.reqired&&elment.EventMs.finished==false)
    })


    console.log(isThere)

    return isThere

 

    }





}




export default InboxIo