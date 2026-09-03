import { useEffect } from "react";
import { setupScrollReveal } from "./scrollReveal";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import ShopNow from "./components/ShopNow";
import Contact from "./components/Contact";

import "./App.css";

function App() { 
  
  useEffect(() => {
    setupScrollReveal();
  }, []);

  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <WhoWeAre />
        <ShopNow />
        <Contact />
      </main>
    </div>
  );
}

export default App;