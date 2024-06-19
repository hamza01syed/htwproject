import Head from 'next/head';
import logo from "@/../public/images/htwlogo.jpg"
import Image from 'next/image';

// import johnDoeImage from '../public/images/john-doe.jpg'; // Example image, update with actual paths
// import janeSmithImage from '../public/images/jane-smith.jpg'; // Example image, update with actual paths

const AboutPage = () => {
    return (
        <div>
          <Head>
            <title>About Us - Home Tutors World</title>
            <meta name="description" content="Learn about Home Tutors World, connecting students with the best home tutors in major cities of Pakistan." />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          
    
          <main className="bg-gray-100 py-8">
            {/* Hero section with image */}
            <section className="bg-gradient-to-r from-blue-300 to-blue-500 py-24 px-4 mb-8 text-white">
              <div className="container mx-auto flex flex-col lg:flex-row items-center">
                <div className=" lg:w-1/4 mb-8 lg:mb-0" data-aos="fade-right">
                  <Image src={logo} alt="About Us" className="rounded-lg shadow-lg" />
                </div>
                <div className="lg:w-1/2 lg:pl-12" data-aos="fade-left">
                  <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Home Tutors World</h1>
                  <p className="text-lg leading-relaxed">
                    Home Tutors World is committed to providing personalized tutoring services that cater to the unique needs of students in major cities of Pakistan. We believe in nurturing academic excellence through tailored learning plans and dedicated tutors.
                  </p>
                </div>
              </div>
            </section>
    
            {/* Mission and Vision section */}
            <section className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md mb-8" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                Our mission is to make quality education accessible by connecting students with experienced tutors who can help them achieve academic excellence and personal growth.
              </p>
            </section>
    
            <section className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md mb-8" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                To be the leading provider of home tutoring services in Pakistan, recognized for our commitment to excellence, personalized learning, and student success.
              </p>
            </section>
    
            {/* Why Choose Us section */}
            <section className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md mb-8" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
              <ul className="list-disc pl-8">
                <li className="text-lg">Experienced and qualified tutors</li>
                <li className="text-lg">Personalized learning plans</li>
                <li className="text-lg">Flexible scheduling</li>
                <li className="text-lg">Proven track record of student success</li>
              </ul>
            </section>
          </main>
    
        
        </div>
      );
};

export default AboutPage;
