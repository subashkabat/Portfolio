import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import ResearchHighlights from "@/components/ResearchHighlights";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import BackToTop from "@/components/BackToTop";
import BackgroundAnimation from "@/components/BackgroundAnimation";

export default function Home() {
  return (
    <>
      <BackgroundAnimation />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <ResearchHighlights />
        <Publications />
        <Skills />
        <Awards />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
