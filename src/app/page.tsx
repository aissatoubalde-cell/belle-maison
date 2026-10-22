import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import Activites from "@/components/Activites";
import Realisations from "@/components/Realisations";
import Marches from "@/components/Marches";
import Approche from "@/components/Approche";
import Valeurs from "@/components/Valeurs";
import Partenaires from "@/components/Partenaires";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Activites />
        <Realisations />
        <Marches />
        <Approche />
        <Valeurs />
        <Partenaires />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
