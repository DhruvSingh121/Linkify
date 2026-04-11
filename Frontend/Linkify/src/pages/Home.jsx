import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ShortenForm from "../components/ShortenForm";
import StatsBar from "../components/StatsBar";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="main-bg">
      <Navbar />
      <Hero />
      <StatsBar />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
