import adventure from "../../adventures/adventure";
import AdventureSeries from "../../adventures/adventureSerias";
import Map from "../../map/map";
import tile from "../../map/tile";


//the peer 


let firstFence1 =new tile(false,['fence'])




let peerMap =new Map('the peer',15,[0,14],[],[[0,6,firstFence1],[1,6,firstFence1],[2,6,firstFence1],[3,6,firstFence1],[4,6,firstFence1],[5,6,firstFence1]],[],null)
peerMap.waterRow(0,5);peerMap.waterRow(1,4);peerMap.waterRow(2,3);peerMap.waterRow(3,2);peerMap.waterRow(4,1);;peerMap.waterRow(5,0)



let peer =new adventure('whoo what a nice peer ',2,5,'',[1,5],[5],[],[],[[peerMap,'discover',100]],0)















let pirateAdventure=[peer]

export let PirateChapter = new AdventureSeries(pirateAdventure,'side')