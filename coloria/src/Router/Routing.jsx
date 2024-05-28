import { ThemeProvider, createTheme } from "@mui/material/styles";
import tmc from "twin-moon-color";

import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../LayOut/Footer/Footer";
import BulbTeamPage from "../Page/BulbTeamPage/BulbTeamPage";
import CreateBulb from "../Page/CreateBulb/CreateBulb";
import RegisterPage from "../Page/base/RegisterPage/RegisterPage";
import LoginPage from "../Page/base/LoginPage/LoginPage";
import JournalPage from '../Page/journalPage/JournalPage';
import Headeing from "../LayOut/Headeing/Headeing";
import HomePage from "../Page/base/Homepage/HomePage";
import GamePage from "../Page/HomePage/GamePage";
import MapPage from "../Page/MapPage/MapPage";
import BulbPage from "../Page/BulbPage/BulbPage";
import InventoryPage from "../Page/InventoryPage/InventoryPage";
import BattlePage from "../Page/BattlePage/BattlePage"
import SavePage from "../Page/SavesPage/SavePage";
import UserPage from "../Page/userPage/UserPage";
import LeadrboeardsPage from "../Page/leadrboeardsPage/LeadrboeardsPage";

// Importing currentData
import { currentData } from "../Script/Data/Data";
import { Heading } from "lucide-react";
import { EditorPage } from "../Page/EditorPage/EditorPage";

// Creating a context
export const UserContext = createContext();

export function Routing() {
  const [data, setData] = useState(currentData); // changing currentData Behind the Scene and using TheUpdate Function everywhere
  const [isDarkTheme, setDarkTheme] = useState(false);


  const themes = tmc({
    "text.headerColor": "!gray",
    "text.headerActive": "*white",
    favActive: "*#FB0000",
  });

  
  const darkMode = createTheme(themes.dark);
  const lightMode = createTheme(themes.light);


  function update() {
    let newData = { ...currentData };
    setData(newData);
  }

  const handleThemeChange = (checked) => {
    setDarkTheme(checked);
  };


  return (
    <>
     <ThemeProvider theme={isDarkTheme ? darkMode : lightMode}>
      <UserContext.Provider value={{ data, update }}>
      <Headeing    isDarkTheme={isDarkTheme}   onThemeChange={handleThemeChange}></Headeing>

        <Routes>

          {/*base */}
        <Route path="/register" element={<RegisterPage></RegisterPage>} />
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/Login" element={<LoginPage></LoginPage>} />
        <Route path="/user" element={<UserPage></UserPage>} />

      

       



        <Route path="/editor" element={<EditorPage></EditorPage>} />
        <Route path="/save" element={<SavePage></SavePage>} />
        <Route path="/game" element={<GamePage/>} />
        <Route path="/map" element={<MapPage  />} />
        <Route path="/bulb" element={<BulbPage  />}/>
        <Route path="/Inventory" element={<InventoryPage currentData={data} />} />
        <Route path="/leadrboeards" element={<LeadrboeardsPage currentData={data} />} />

        <Route path="/Battle" element={<BattlePage />} />



          <Route path="/Team" element={<BulbTeamPage></BulbTeamPage>} />
          <Route path="/CBulb" element={<CreateBulb></CreateBulb>} />
          <Route path="/Journal" element={<JournalPage></JournalPage>} />
        </Routes>
        <Footer />
        
      </UserContext.Provider>

      </ThemeProvider>
    </>
  );
}

export default Routing;