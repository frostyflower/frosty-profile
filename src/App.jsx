import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Lenis from "lenis";

import AboutMe from "./pages/AboutMe";
import Experiences from "./pages/Experiences";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      smooth: true, // Enable smooth scrolling
      direction: "vertical", // Scroll direction
      smoothTouch: false, // Disable smooth scrolling on touch devices
      touchMultiplier: 2, // Touch scroll speed multiplier
    });

    // Animation loop to keep Lenis updated
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      // Cleanup on component unmount
      lenis.destroy();
    };
  }, []);

  return (
    <div style={{ overflowY: scroll }}>
      <ParallaxProvider>
        <AboutMe />
      </ParallaxProvider>
      <section id="experiences">
        <Experiences />
      </section>
	  <Footer/>
    </div>
  );
}

export default App;
