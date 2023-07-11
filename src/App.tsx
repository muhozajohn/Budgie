import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./Pages/Home";
import Mentor from "./components/Mentorship/Mentor";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Mentorship" element={<Mentor />} />
      </Routes>
        <Footer/>
    </BrowserRouter>
  );
};

export default App;
