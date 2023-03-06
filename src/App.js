import React, { Suspense } from "react";
import HeroSection from "./section/HeroSection/HeroSection";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import StudentTestiminionals from "./section/StudentTestimonials/StudentTestiminoals";
import ContactSection from "./section/ContactSection/ContactSection";
import Footer from "./section/Footer/Footer";
import InfoSection from "./section/InfoSection/InfoSection";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroSection />
      <InfoSection />
      <StudentTestiminionals />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
