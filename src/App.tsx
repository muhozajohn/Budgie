import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav"
import Home from "./Pages/Home"

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App