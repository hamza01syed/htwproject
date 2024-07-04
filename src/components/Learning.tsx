import Image from 'next/image';
import enrol from "@/../public/images/enrolpic.jpg"
// import serv1 from '../public/images/serv1.jpg'; // Update the path to your image

const CustomLearning = () => {
  return (
    <section id="custom-learning" className="py-16 px-4 w-full bg-gray-300">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image on the left side */}
        <div className="w-full md:w-1/2 lg:w-[35%] mb-8 md:mb-0" data-aos="fade-right">
          <Image src={enrol} alt="Custom Learning" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        {/* Text content on the right side */}
        <div className="w-full md:w-1/2 md:pl-12" data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">We understand every child learns differently</h2>
          <p className="text-lg mb-4">So we’ll find the perfect tutor to match your child’s needs. We talk to you about your child’s goals, learning style, and what subjects they need help with.</p>
          <p className="text-lg">Our personalized approach ensures that each student receives the individual attention they deserve, making learning more effective and enjoyable.</p>
        </div>
      </div>
    </section>
  );
};

export default CustomLearning;
