import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Preview from "./components/Preview";
import Setup from "./components/Setup";
import Download from "./components/Download";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Preview />
        <Features />
        <Setup />
        <Download />
      </main>
      <Footer />
    </>
  );
}
