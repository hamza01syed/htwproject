"use client"
import Image from "next/image";
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from "@/components/Hero";
import About from "@/components/About";
import ServicesSection from "@/components/Services";
// import CitiesSection from "@/components/CitiesSection";
// import TestimonialsSection from "@/components/Testimonials";
import Head from "next/head";
import CustomLearning from "@/components/Learning";
import Logos from "@/components/Logos";
// import htlogo from "@/../public/images/htwlogo.jpg"

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return <div>
    <Head>
        <title>Home Tutors World</title>
        <meta name="description" content="Find the best home tutors in major cities of Pakistan." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <HeroSection/>
    <About/>
    <Logos/>
    <ServicesSection/>
    {/* <CitiesSection/> */}
    {/* <TestimonialsSection/> */}
    <CustomLearning/>

  </div>
}

export default Home;
