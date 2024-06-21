import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Hero from "@/Components/Hero";

// import { MarqueeDemo } from "@/Components/artistList";
import CountryList from "@/Components/CountriesList";
import MainPage from "@/Components/MainPage";
import Power from "@/Components/Testimonial";
import AnimatedSection from "@/Components/HowTo";

const imageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};

const Home: FC = () => {
  return (
    <div className="bg-white gap-16">
      <Hero />

      <MainPage />
       <AnimatedSection />

      <Power />
    </div>
  );
};

export default Home;
