import React from "react";
import backgroundImg from "../assets/background.jfif";
import logoImg from "../assets/logo.jpg";

const Home = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Top header with address and contact */}
      <div className="text-center py-4 text-gray-700 text-sm">
        <div className="flex justify-center space-x-32">
          <span>Rue Dakar, IMM N°5, APP N°1, Rabat</span>
          <span>Contact</span>
        </div>
      </div>

      {/* Logo centered at the top */}
      <div className="flex justify-center mt-2 mb-4">
        <img
          src={logoImg}
          alt="SOFTAWERTICH Logo"
           className="w-[180px] h-[170px] object-contain"
           style={{ maxWidth: "180px", maxHeight: "170px" }}
        />
      </div>

      {/* Main navigation */}
      <nav className="flex justify-center py-4 space-x-10 text-gray-700">
        <a href="#" className="hover:text-green-600 font-medium">Home</a>
        <a href="#" className="hover:text-green-600 font-medium">Products</a>
        <a href="#" className="hover:text-green-600 font-medium">Partners</a>
        <a href="#" className="hover:text-green-600 font-medium">Career</a>
        <div className="ml-12">
          <a href="#" className="hover:text-green-600 font-medium mr-6">Login</a>
          <a href="#" className="hover:text-green-600 font-medium">Signup</a>
        </div>
      </nav>

      {/* About us section */}
      <section className="mt-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 ml-16">About us</h1>
          <p className="text-gray-600 max-w-md ml-16">
            We are a company specializing in cybersecurity,
            protecting critical infrastructures and strategic
            sectors such as transportation, telecommunications,
            and governments. With our in-depth expertise, we
            develop robust strategies to secure 5G networks and
            provide advanced protection against emerging
            threats.
          </p>
        </div>
      </section>

      {/* Hero section */}
      <section 
        className="mt-16 py-16 text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="text-3xl font-bold mb-3">Secure Your Digital World</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Entreprise-grade cybersecurity solutions to protect your business from evolving
          digital threats
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md mt-4">
          Explore Solutions
        </button>
      </section>

      {/* Numbers section */}
      <section className="py-16 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">SOFTAWERTICH in Numbers</h3>
        <p className="max-w-3xl mx-auto mb-12 px-4 text-gray-600">
          SOFTAWERTICH is a company specialized in cybersecurity. A true key player in
          the global market, Softwaretich holds a strategic position in the
          cybersecurity ecosystem, thanks to a pool of advanced skills and unique
          expertise.
        </p>

        <div className="flex justify-center space-x-20">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">+ 200</p>
            <p className="text-gray-600">Clients</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">+ 1000</p>
            <p className="text-gray-600">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">+ 100</p>
            <p className="text-gray-600">Certifications of<br />security</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">+ 25</p>
            <p className="text-gray-600">Pays</p>
          </div>
        </div>
      </section>

      {/* Footer - Two columns */}
      <footer className="mt-auto bg-gray-100 py-8 text-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            {/* Left column - Contact info */}
            <div className="ml-16">
              <p className="mb-1">Rue Dakar, IMM N°5, APP N°1, Rabat</p>
              <p className="mb-1">Tibari@softwaretich.com</p>
              <p className="mb-1">+212665-0707-75</p>
            </div>
            
            {/* Right column - Links */}
            <div className="text-right mr-16">
              <p className="mb-1"><a href="#" className="hover:text-green-600">Other</a></p>
              <p className="mb-1"><a href="#" className="hover:text-green-600">References</a></p>
              <p className="mb-1"><a href="#" className="hover:text-green-600">Partners</a></p>
              <p className="mb-1"><a href="#" className="hover:text-green-600">Media library</a></p>
              <p className="mb-1"><a href="#" className="hover:text-green-600">Career</a></p>
              <p className="mb-1"><a href="#" className="hover:text-green-600">Contact</a></p>
            </div>
          </div>
          
          {/* Footer - Bottom links and copyright */}
          <div className="mt-12 text-center">
            <div className="flex justify-center space-x-16 mb-4">
              <a href="#" className="hover:text-green-600">Privacy Policy</a>
              <a href="#" className="hover:text-green-600">Terms of Service</a>
              <a href="#" className="hover:text-green-600">Contact</a>
            </div>
            <p className="text-gray-500 text-sm mt-2">© 2025 SOFTAWERTICH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;