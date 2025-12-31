import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Speciality from './components/Speciality';
import Menu from './components/Menu';
import ChefSection from './components/ChefSection';
import Gallery from './components/Gallery';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  return (
    <Loader>
      <main className="min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Speciality />
        <Stats />
        <Menu />
        <ChefSection />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </Loader>
  );
}