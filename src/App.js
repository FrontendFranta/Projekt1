import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Services from "./pages/About"
import Contact from "./pages/Contact"
import OneService from "./components/OneService";
import About from "./pages/About";

import "./App.css"
function App() {
  return <BrowserRouter>

  <Routes>
    <Route path="Projekt1" element={ <Home /> } />
    
    <Route path="all-services/:serviceId" element={<OneService/>}/>
  </Routes>
 
</BrowserRouter>
}

export default App;
