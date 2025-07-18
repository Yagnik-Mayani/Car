import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Accessories from "./pages/Accessories";
import Owners from "./pages/Owners";
import Services from "./pages/Services"; // <-- Import Services
import './input.css';
import ScrollToTopButton from "./components/ScrollToTopButton";
import Chatbot from "./components/Chatbotwidget";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home">
                  <Home />
                </div>
                <div id="services">
                  <Services />
                </div>
                <div id="accessories">
                  <Accessories />
                </div>
                <div id="owners">
                  <Owners />
                </div>
              </>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/owners" element={<Owners />} />
        </Routes>
         <ScrollToTopButton />
        <Chatbot />
      </div>
    </Router>
  );
}
export default App;