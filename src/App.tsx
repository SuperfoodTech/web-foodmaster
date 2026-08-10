import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ValueProp from "./components/ValueProp"
import Services from "./components/Services"
import HowItWorks from "./components/HowItWorks"
import Platforms from "./components/Platforms"
import WhyFoodMaster from "./components/WhyFoodMaster"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <Services />
        <HowItWorks />
        <Platforms />
        <WhyFoodMaster />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
