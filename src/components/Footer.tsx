import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
        {/* Logo and Description */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Home Tutors World</h2>
          <p>Connecting students with the best home tutors in PAK,KSA and UAE.</p>
        </div>
        
        {/* Navigation Links */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="about" className="hover:underline">About</Link></li>
            <li><Link href="services" className="hover:underline">Services</Link></li>
            {/* <li><Link href="#cities" className="hover:underline">Cities</Link></li> */}
            <li><Link href="contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        
        {/* Contact Information */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>Phone: +92-3032913061</p>
          <p>Email: hometutorsworld0@gmail.com</p>
          {/* <p>Address: 123 Tutor Lane, Karachi, Pakistan</p> */}
        </div>
        
        {/* Social Media Links */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/Htutors123" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaFacebookF className="text-2xl" />
            </Link>
            <Link href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaTwitter className="text-2xl" />
            </Link>
            <Link href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaInstagram className="text-2xl" />
            </Link>
            <Link href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaLinkedinIn className="text-2xl" />
            </Link>
            {/* <Link href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaYoutube className="text-2xl" />
            </Link> */}
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Home Tutors World. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
