import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import ShopNow from "./components/ShopNow";
import Contact from "./components/Contact";

import "./App.css";

function App() {
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