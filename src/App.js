import HeroSection from "./section/HeroSection/HeroSection";
import InfoSection from "./section/InfoSection/InfoSection";
import StudentTestiminionals from "./section/StudentTestimonials/StudentTestiminoals";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ContactSection from "./section/ContactSection/ContactSection";
import Footer from "./section/Footer/Footer";

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
