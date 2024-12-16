import AboutUs from "@/Components/Aboust-us/AboutUs";
import About from "@/Components/About/About";
import Blog from "@/Components/Blog/Blog";
import FoodCategory from "@/Components/FoodCatagiry/FoodCatagiry";
import FoodMenu from "@/Components/FoodMenu/FoodMenu";
import Footer from "@/Components/Footer/Footer";
import FooterTop from "@/Components/Footer/FooterTop";
import Header from "@/Components/Header/Header";
import Hero from "@/Components/Hero/Herao";
import OurTeam from "@/Components/Team/Ourteam";

import Image from "next/image";

export default function Home() {

  
   return (
    <main >

      <Header />

      <Hero />     

      <About />

      <AboutUs />

      <FoodCategory />

      <FoodMenu />

      <OurTeam />

      <Blog />

           
      <FooterTop />


      <Footer />



    </main>
  );
}
