"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">Home Tutors World</Link>
        </h1>
        <nav className="hidden md:flex items-center">
          <Link href="/" className="mx-2">Home</Link>
          <Link href="/about" className="mx-2">About</Link>
          <Link href="/services" className="mx-2">Services</Link>
          <Link href="/contact" className="mx-2">Contact</Link>
          <select className="bg-blue-400 mx-2 px-1 py-2 rounded-lg text-white cursor-pointer mt-2">
                <option className='text-green-300' value="pak">Pakistan (Pak)</option>
                <option className='text-green-900' value="ksa">Saudi Arabia (KSA)</option>
                <option className="text-red-800" value="uae">United Arab Emirates (UAE)</option>
            </select>
          <a 
            href="https://wa.me/923032913061" 
            className="mx-2 flex items-center" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-2xl" />
            <span className="ml-1">03032913061</span>
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-blue-600 text-white p-4">
          <Link href="/" className="block py-2" onClick={toggleMenu}>Home</Link>
          <Link href="/about" className="block py-2" onClick={toggleMenu}>About</Link>
          <Link href="/services" className="block py-2" onClick={toggleMenu}>Services</Link>
          <Link href="/contact" className="block py-2" onClick={toggleMenu}>Contact</Link>
          <a 
            href="https://wa.me/923032913061" 
            className=" py-2 flex items-center" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={toggleMenu}
          >
            <FaWhatsapp className="text-2xl" />
            <span className="ml-1">03032913061</span>
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
