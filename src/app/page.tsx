import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import TrustStrip from "@/components/sections/TrustStrip";
import Services from "@/components/sections/Services";
import Solutions from "@/components/sections/Solutions";
import Vision from "@/components/sections/Vision";
import Industries from "@/components/sections/Industries";
import Technologies from "@/components/sections/Technologies";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <TrustStrip />
        <Services />
        <Solutions />
        <Vision />
        <Industries />
        <Technologies />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
