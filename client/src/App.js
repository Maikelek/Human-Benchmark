import {BrowserRouter,Routes,Route,} from "react-router-dom";

import Index from "./pages/Index"
import Login from "./pages/Login"
import Register from "./pages/Register";

import ReactionTime from "./pages/ReactionTime";

import AimTrainer from "./pages/AimTrainer";

import "./App.css";


function App() {
  return ( 
      <BrowserRouter>  
        <Routes>
          <Route path="*" element={<Index/>}/>

          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

          <Route path="/reaction-time" element={<ReactionTime/>}/>
          <Route path="/aim-trainer" element={<AimTrainer/>}/>
      
        </Routes>
      </BrowserRouter>
  );
}

export default App;