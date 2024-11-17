import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, Outlet } from "react-router-dom"

//Pages
import Home from "./components/Pages/Home"
import About from "./components/Pages/About";
import Skills from "./components/Pages/Skills";
import Projects from "./components/Pages/Projects";
import Contact from "./components/Pages/Contact";
import HexagonGrid from "./components/Pages/hexagonGrid/HexagonGrid";
import HexagonSymbol from "./components/Pages/HexagonSymbol/HexagonSymbol";


function App() {


  return (
  <div >
    <Navbar />
    <Outlet />
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/projects" element={<Projects/>} />

      <Route path="/hexagon" element={<HexagonGrid />} /> 
      <Route path="/hexagonSymbol" element={<HexagonSymbol />} /> 
      
    </Routes>
  </div>
  )
}

export default App;
