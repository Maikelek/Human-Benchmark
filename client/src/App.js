import {BrowserRouter,Routes,Route,} from "react-router-dom";

import Login from "./pages/Login"
import Index from "./pages/Index"

import "./App.css";


function App() {
  return ( 
      <BrowserRouter>  
        <Routes>
          <Route path="*" element={<Index/>}/>

          <Route path="/login" element={<Login/>}/>

      
        </Routes>
      </BrowserRouter>
  );
}

export default App;