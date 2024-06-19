import React, { useEffect } from 'react';
import Head from 'next/head';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// Import your images
import mathImage from '@/../public/images/mathsimg.jpg';
import scienceImage from '@/../public/images/sciencepic.jpg';
import englishImage from '@/../public/images/engpic.jpg';
import codingImage from '@/../public/images/codeimg.jpeg';
import webDevImage from '@/../public/images/webpic.jpg';
import gdImage from '@/../public/images/gdpic.jpg';
import engineeringImage from '@/../public/images/engineerpic.jpg';
import businessImage from '@/../public/images/businesspic.jpg';
import medicalImage from '@/../public/images/medicalpic.jpg';
import Image from 'next/image';
// import englishLangImage from '../public/images/language-english.jpg';
// import urduImage from '../public/images/language-urdu.jpg';
// import frenchImage from '../public/images/language-french.jpg';

const Services = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

  return (
    <div>
      <Head>
        <title>Our Services - Home Tutors World</title>
        <meta
          name="description"
          content="Explore our comprehensive range of tutoring services at Home Tutors World. We provide personalized tutoring in academic subjects, languages, and technical skills across major cities in Pakistan."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" data-aos="fade-up">
            Our Services
          </h2>

          {/* Academics Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6" data-aos="fade-up">
              Academics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mathematics */}
              <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up">
                <h4 className="text-xl font-bold mb-2">Mathematics</h4>
                <p className="text-lg mb-4">Comprehensive math tutoring for all grade levels.</p>
                <Image src={mathImage} alt="Mathematics" className="mx-auto w-full h-auto rounded" />
              </div>

              {/* Science */}
              <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="100">
                <h4 className="text-xl font-bold mb-2">Science</h4>
                <p className="text-lg mb-4">Physics, Chemistry, and Biology tutoring tailored to your needs.</p>
                <Image src={scienceImage} alt="Science" className="mx-auto w-full h-auto rounded" />
              </div>

              {/* English */}
              <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="200">
                <h4 className="text-xl font-bold mb-2">English</h4>
                <p className="text-lg mb-4">Improve your English language skills with our expert tutors.</p>
                <Image src={englishImage} alt="English" className="mx-auto w-full h-60 rounded" />
              </div>
            </div>
          </div>

          {/* Tech Skills Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6" data-aos="fade-up">
              Tech Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Coding */}
              <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up">
                <h4 className="text-xl font-bold mb-2">Coding</h4>
                <p className="text-lg mb-4">Learn programming languages like Python, JavaScript, and more.</p>
                <Image src={codingImage} alt="Coding" className="mx-auto w-full h-56 rounded" />
              </div>

              {/* Web Development */}
              <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="100">
                <h4 className="text-xl font-bold mb-2">Web Development</h4>
                <p className="text-lg mb-4">Master front-end and back-end web development skills.</p>
                <Image src={webDevImage} alt="Web Development" className="mx-auto w-full h-56 rounded" />
              </div>

              {/* Software Skills */}
              <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="200">
                <h4 className="text-xl font-bold mb-2">Software Skills</h4>
                <p className="text-lg mb-4">Get proficient with essential software tools and technologies.</p>
                <Image src={gdImage} alt="Software Skills" className="mx-auto w-full h-56 rounded" />
              </div>
            </div>
          </div>

          {/* University Courses Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6" data-aos="fade-up">
              University Courses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Engineering */}
              <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up">
                <h4 className="text-xl font-bold mb-2">Engineering</h4>
                <p className="text-lg mb-4">Tutoring for various engineering disciplines and subjects.</p>
                <Image src={engineeringImage} alt="Engineering" className="mx-auto w-full h-64 rounded" />
              </div>

              {/* Business Administration */}
              <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="100">
                <h4 className="text-xl font-bold mb-2">Business Administration</h4>
                <p className="text-lg mb-4">Expert guidance in business-related subjects and courses.</p>
                <Image src={businessImage} alt="Business Administration" className="mx-auto w-full h-64 rounded" />
              </div>

              {/* Medical Sciences */}
              <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="200">
                <h4 className="text-xl font-bold mb-2">Medical Sciences</h4>
                <p className="text-lg mb-4">Support for medical students in various medical science courses.</p>
                <Image src={medicalImage} alt="Medical Sciences" className="mx-auto w-full h-64 rounded" />
              </div>
            </div>
          </div>

          {/* Language Courses Section */}
          {/*  */}
        </div>
      </section>
    </div>
  );
};

export default Services;
