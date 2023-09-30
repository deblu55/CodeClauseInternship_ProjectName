import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Error, About } from "./pages";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
