import Home from "./components/section/home";
import Services from "./components/section/services";
import AboutUs from "./components/section/aboutus";
import Testimonials from "./components/section/testimonials";
import Contact from "./components/section/contact";


export default function HomePage() {
  return (
    <main>
      <Home />
      <Services />
      <AboutUs />
      <Testimonials />
      <Contact />
    </main>
  );
}
