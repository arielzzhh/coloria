

import { useState } from 'react';
import LoginContext from './customhooks/loginContext';
import './App.css';
import Routing from './Router/Routing';
function App() {
  const [login, setLogin] = useState(null);


 

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
    <div style={{backgroundColor:'grey'}} className="App">
      
    

<Routing></Routing>


     </div>
     </LoginContext.Provider>

  );
}

export default App;
