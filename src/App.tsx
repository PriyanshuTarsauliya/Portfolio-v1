import About from "./components/About";
import Cursor from "./components/Cursor";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import BackgroundGlow from "./components/BackgroundGlow";
import StatsWidget from "./components/StatsWidget";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";

import { ThemeProvider } from "./provider/ThemeProvider";
import { CursorProvider } from "./context/cursor.context.tsx";

function App() {
  return (
    <ThemeProvider>
      <CursorProvider>
        <ScrollProgress />
        <div id="home" className="min-h-[calc(100vh-48px)] sm:min-h-[calc(100vh-96px)] flex flex-col scroll-smooth">
          <BackgroundGlow />
          <Navbar />
          <Cursor />
          <main className="mx-auto px-6 w-full max-w-5xl">
            {/* Hero Section */}
            <div className="min-h-[100vh] flex flex-col justify-center items-center pt-20 pb-10">
              <Header />
              <div id="about"><About /></div>
              <StatsWidget />
            </div>
            
            <div className="flex flex-col gap-16 mt-10">
              <div id="skills" className="scroll-mt-24"><Skills /></div>
              <div id="projects" className="scroll-mt-24"><Projects /></div>
              <div id="experience" className="scroll-mt-24"><Experience /></div>
              <div id="contact" className="scroll-mt-24"><Contact /></div>
            </div>
          </main>
          <Footer />
        </div>
        <ScrollToTop />
      </CursorProvider>
    </ThemeProvider>
  );
}

export default App;
