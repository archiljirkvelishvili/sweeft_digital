import { Routes, Route } from "react-router-dom";

import Userfetch from "./components/Userfetch"
import Friends from "./components/Friends"



export default function App() {
  
  
  return (
    <div>
      <Routes>

        <Route path="/" element={<Userfetch />}/>
        <Route path="/friends" element={<Friends />}/>

      </Routes>
    </div>
  );
}


