import React from "react";
import HeroSection from "../components/home/HeroSection";
import About from "../components/home/About";
import Services from "../components/home/Services";
import UniversitySlider from "../components/home/UniversitySlider";
import CTA from "../components/home/CTA";

const Home: React.FC = () => {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <About />
            <Services />
            <UniversitySlider />
            <CTA />
        </div>
    );
};

export default Home;
