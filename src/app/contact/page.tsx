// pages/contact.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Contact: NextPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Contact Us - Home Tutors World</title>
        <meta name="description" content="Get in touch with Home Tutors World or apply as a tutor." />
      </Head>

      <main className="container mx-auto py-8 px-4 bg-white rounded-lg shadow-lg">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-indigo-800" data-aos="fade-up">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700" data-aos="fade-up" data-aos-delay="200">
            We would love to hear from you! Choose an option below to get in touch.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact via WhatsApp */}
          <div className="contact-info p-6 bg-white rounded-lg shadow-md" data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-4">Parents/Students Inquiry</h2>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Contact:</strong> +92-3032913061
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Chat with us:</strong> Click the button below to open WhatsApp chat.
            </p>
            <a
              href="https://wa.me/923032913061"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
            >
              Open WhatsApp Chat
            </a>
          </div>

          {/* Register as a Tutor */}
          <div className="contact-form p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-2xl font-bold mb-4">Register as a Tutor</h2>
            <p className="text-lg text-gray-700">
              If you are interested in becoming a tutor, please fill out our application form by clicking the link below.
            </p>
            <a
              href="https://forms.gle/zPpewXvxpdvRUENi9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700"
            >
              Apply as a Tutor
            </a>
          </div>
        </section>

        {/* Common Image */}
        {/* <section className="text-center mt-8" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-4">Our Office</h2>
          <p className="text-lg text-gray-700 mb-4">
            Visit us at our office located at 123 Tutor Lane, Education City, EC 12345.
          </p>
          <div className="mx-auto w-3/4 md:w-1/2">
            <Image
              src="/office-image.jpg" // Replace with your common image path
              alt="Office Image"
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default Contact;
