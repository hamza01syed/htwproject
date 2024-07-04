import React from 'react';

const services = [
  { title: "Academic Tutoring", description: "Expert tutors for all academic subjects.", bgColor: "bg-blue-200" },
  { title: "Language Tutoring", description: "Learn new languages with ease.", bgColor: "bg-green-200" },
  { title: "Tech Skills", description: "Improve your tech skills with our professional tutors.", bgColor: "bg-yellow-200" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 px-4 md:px-8 text-center w-full bg-gray-100" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className={`rounded-lg shadow-md p-6 ${service.bgColor}`}>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
