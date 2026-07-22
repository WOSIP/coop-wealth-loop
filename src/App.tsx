import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Stakeholders from "./pages/Stakeholders";
import HowItWorks from "./pages/HowItWorks";
import EndUser from "./pages/EndUser";
import Developers from "./pages/Developers";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stakeholders" element={<Stakeholders />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/end-user" element={<EndUser />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;