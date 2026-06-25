import AboutSection from './components/AboutSection.jsx';
import BookStrip from './components/BookStrip.jsx';
import BookingSection from './components/BookingSection.jsx';
import CareHighlights from './components/CareHighlights.jsx';
import Footer from './components/Footer.jsx';
import GallerySection from './components/GallerySection.jsx';
import Hero from './components/Hero.jsx';
import LocationSection from './components/LocationSection.jsx';
import Navbar from './components/Navbar.jsx';
import Newsletter from './components/Newsletter.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import TeamPreview from './components/TeamPreview.jsx';
import { mapUrl } from './data/siteData.js';

function App() {
  return (
    <>
      <Navbar mapUrl={mapUrl} />
      <Hero />
      <AboutSection />
      <BookStrip mapUrl={mapUrl} />
      <TeamPreview />
      <CareHighlights />
      <BookingSection />
      <Newsletter />
      <ServicesSection />
      <LocationSection mapUrl={mapUrl} />
      <GallerySection />
      <Footer mapUrl={mapUrl} />
    </>
  );
}

export default App;