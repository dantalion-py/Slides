import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"

import { Dany } from "./pages/Dany";
import { Simon } from "./pages/Simon";
import { Brandon } from "./pages/Brandon";
import { Dayeza } from "./pages/Dayeza";
import { Johan } from "./pages/Johan";
import { Home } from "./pages/Home";

import{NavBar} from "./components/NavBar";
import Inicial from "./pages/Inicial";


function App() {
  return (
    <>
      <NavBar />
      <Container className="mb-4">
        <Routes>

          <Route path="/" element={<Inicial/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Dany" element={<Dany/>} />
          <Route path="/Simon" element={<Simon/>} />
          <Route path="/Brandon" element={<Brandon/>} />
          <Route path="/Dayeza" element={<Dayeza/>} />
          <Route path="/Johan" element={<Johan/>} />

        </Routes>
      </Container>
    </>
  );
}

export default App;
