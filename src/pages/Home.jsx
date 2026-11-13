
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import TestingServices from "../components/TestingServices";
import WhoWeTestFor from "../components/WhoWeTestFor";
import HowTestingWorks from "../components/HowTestingWorks";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
    

      <main>
        <Hero />
        <TrustStrip />
        <TestingServices />
        <WhoWeTestFor />
        <HowTestingWorks />
        <FinalCTA />
      </main>

      
    </>
  );
}
