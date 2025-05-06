"use client";
// import Image from "next/image";
import HeroSection from '../components/HeroSection';
import AboutVibeCoding from '../components/AboutVibeCoding';
import RecommendedFor from '../components/RecommendedFor';
import Curriculum from '../components/Curriculum';
import Features from '../components/Features';
import Reviews from '../components/Reviews';
import HowItWorks from '../components/HowItWorks';
import PreRegister from '../components/PreRegister';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-[#10151c] text-white min-h-screen">
      <HeroSection />
      <AboutVibeCoding />
      <RecommendedFor />
      <Curriculum />
      <Features />
      <Reviews />
      <HowItWorks />
      <PreRegister />
      <FAQ />
      <Footer />
    </main>
  );
}
