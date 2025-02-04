import { Bonus } from "../../Components/Bonus/Bonus.jsx";
import { WhyToyota } from "../../Components/Flip/Flip.jsx";
import Footer from "../../Components/footer/Footer.jsx";
import { Gallery } from "../../Components/Gallery/Gallery.jsx";
import Hero from "../../Components/hero/Hero.jsx";
import { Irwansyah, Pengalaman } from "../../Components/Irwanysah/Body.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import { Profil } from "../../Components/profil/Profil.jsx";
import { Promo } from "../../Components/Promo/Promo.jsx";
import { Service } from "../../Components/Servis/Service.jsx";
import { Stat } from "../../Components/Stat/Stat.jsx";
import { Testimoni } from "../../Components/Testimoni/Testimoni.jsx";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Pengalaman />
      <Irwansyah />
      <WhyToyota />
      <Service />
      <Bonus />
      <Gallery />
      <Stat />
      <Testimoni />
      <Promo />
      <Profil />
      <Footer />
    </div>
  );
};

export default HomePage;
