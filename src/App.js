import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SubscribeModal from "./components/SubscribeModal";
import AboutModal from "./components/AboutModal";
import LoginModal from "./components/LoginModal";

// Pages
import Home from "./pages/Home";
import Breakfast from "./pages/Breakfast";
import Appetizers from "./pages/Appetizers";
import SoupsSalads from "./pages/SoupsSalads";
import Mains from "./pages/Mains";
import Desserts from "./pages/Desserts";
import DrinksAlcohol from "./pages/DrinksAlcohol";
import PantrySauces from "./pages/PantrySauces";

function App() {
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      <div className="app-container">
        {/* Global Navbar */}
        <Navbar onOpenLogin={() => setShowLogin(true)} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appetizers" element={<Appetizers />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/soups-salads" element={<SoupsSalads />} />
          <Route path="/mains" element={<Mains />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/drinks-alcohol" element={<DrinksAlcohol />} />
          <Route path="/pantry-sauces" element={<PantrySauces />} />
        </Routes>

        {/* Global Footer */}
        <Footer
          onOpenSubscribe={() => setShowSubscribe(true)}
          onOpenAbout={() => setShowAbout(true)}
        />

        {/* Modals */}
        {showSubscribe && <SubscribeModal onClose={() => setShowSubscribe(false)} />}
        {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
        {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      </div>
    </Router>
  );
}

export default App;
