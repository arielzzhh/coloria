import { Routes, Route } from "react-router-dom";
import GamePage from "../Page/HomePage/GamePage";
import MapPage from "../Page/MapPage/MapPage";
import BulbPage from "../Page/BulbPage/BulbPage";
import InventoryPage from "../Page/InventoryPage/InventoryPage";
import BattlePage from "../Page/BattlePage/BattlePage";



export function GameBatch ({data}){


    return(

        <Routes>
        <Route path="/" element={<GamePage/>} />
        <Route path="/map" element={<MapPage  />} />
        <Route path="/bulb" element={<BulbPage  />}/>
        <Route path="/Inventory" element={<InventoryPage currentData={data} />} />
        <Route path="/Battle" element={<BattlePage />} />
        </Routes>


    )
}


export default GameBatch