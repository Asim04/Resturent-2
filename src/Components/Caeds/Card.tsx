// components/Header.tsx
import React from 'react';
import Image from 'next/image';

interface HeaderProps {
  logoSrc: string;
  title: string;
  navLinks: { href: string; label: string }[];
  backgroundImage: string;
  subtitle: string;
}

const Card: React.FC<HeaderProps> = ({ logoSrc, title, navLinks, backgroundImage, subtitle }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src={logoSrc} alt="Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold ml-2">{title}</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-gray-700 hover:text-blue-500">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-cover bg-center h-64" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl font-bold text-white">{title}</h2>
          <p className="text-white mt-2">{subtitle}</p>
        </div>
      </div>
    </header>
  );
};

export default Card;
