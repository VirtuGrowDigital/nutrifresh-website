
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import MicrobiologicalTesting from "./pages/MicrobiologicalTesting";
import Contact from "./pages/Contact";
import MicrobiologicalParameters from "./pages/MicrobiologicalParameters";
import BookTest from "./pages/BookTest";
import About from "./pages/About";
import Services from "./pages/Services";
import FoodTesting from "./pages/FoodTesting";
import ChemicalPhysicalTesting from "./pages/ChemicalPhysicalTesting";
import NutritionalTesting from "./pages/NutritionalTesting";
import HeavyMetalTesting from "./pages/HeavyMetalTesting";
import AdulterationAuthenticity from "./pages/AdulterationAuthenticity";


function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
       <Navbar/>

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/services/microbiological-testing"
              element={<MicrobiologicalTesting />}
            />

            <Route
              path="/services/microbiological-testing/parameters"
              element={<MicrobiologicalParameters />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-a-test" element={<BookTest />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/food-testing" element={<FoodTesting />} />
            <Route
  path="/services/chemical-physical-testing"
  element={<ChemicalPhysicalTesting />}
/>
<Route
  path="/services/nutritional-testing"
  element={<NutritionalTesting />}
/>

<Route
  path="/services/heavy-metal-testing"
  element={<HeavyMetalTesting />}
/>

<Route
  path="/services/adulteration-authenticity"
  element={<AdulterationAuthenticity />}
/>
          </Routes>
        </div>

  <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
