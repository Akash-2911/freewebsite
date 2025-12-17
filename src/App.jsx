import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import Submit from "./pages/Submit";
import Donate from "./pages/Donate";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
