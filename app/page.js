import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "@/components/AboutSection";
import EmailSection from "../components/EmailSection";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col"
      style={{ backgroundColor: '#efeee8' }}>
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
        <EmailSection/>
        <Footer/>
      </div>
    </main>
  );
}