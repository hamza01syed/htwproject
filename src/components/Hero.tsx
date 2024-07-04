import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import htc1 from "@/../public/images/htc1.png"
import htc4 from "@/../public/images/htc4.png"
import htc5 from "@/../public/images/HTC5.png"
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative bg-blue-500 text-white w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className="text-center"
      >
        <div>
          <Image src={htc4} priority alt="Slide 1" className="w-full h-96 object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center p-4">
              <h2 className="text-4xl font-bold mb-4">Welcome to Home Tutors World</h2>
              <p className="text-lg mb-4">Connecting students with the best home tutors in major cities of Pakistan.</p>
              <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">Get Started</button>
            </div>
          </div>
        </div>
        <div>
          <Image src={htc5} alt="Slide 2" className="w-full h-96 object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center p-4">
              <h2 className="text-4xl font-bold mb-4">Expert Tutors at Your Doorstep</h2>
              <p className="text-lg mb-4">Personalized tutoring for academic subjects, languages, and tech skills.</p>
              <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">Find a Tutor</button>
            </div>
          </div>
        </div>
        <div>
          <Image src={htc1} alt="Slide 3" className="w-full h-96 object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center p-4">
              <h2 className="text-4xl font-bold mb-4">Achieve Your Goals</h2>
              <p className="text-lg mb-4">Enhance your learning with top-quality tutoring services.</p>
              <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">Contact Us</button>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSection;
