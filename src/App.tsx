// VumiEngineering - React + Vite (Enhanced with Beautiful Custom CSS)
// This version improves the aesthetic using Tailwind + custom CSS animations and gradients.
//
// Steps are the same: create Vite + React, install Tailwind, copy this code into src/App.jsx, etc.

import "./App.css";
import "./index.css";
import { useState } from "react";
import logo_bg from "./assets/logo.jpg";
import Projects from "./project";

function TopBar() {
  return (
    <div className="bg-gradient-to-r from-[#0b3b4a] to-[#145a6a] text-white text-sm animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span>📞</span> +977-1-1234567
        </div>
        <div className="flex items-center gap-2">
          <span>🕒</span> Mon - Fri: 9:00 AM - 5:00 PM
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 animate-slideDown">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={logo_bg}
            alt="Vumi Engineering"
            className="rounded-2xl shadow-lg h-20 w-20"
          />
          <h1 className="text-xl sm:text-2xl font-extrabold text-[#0b3b4a] tracking-tight">
            Arching Design
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-[#0b3b4a] transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#0b3b4a] group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#ffffff] focus:outline-none -mt-1 translate-y-[-20px]"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col items-center py-2 space-y-4 text-sm font-medium">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-600 hover:text-[#0b3b4a] transition"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative h-[90vh] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 animate-fadeUp">
        <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Building Sustainable Engineering Solutions
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Empowering Nepal with world-class civil, mechanical, and electrical
          services.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#ff6b00] hover:bg-[#ff8533] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}

function Services() {
  const cards = [
    {
      icon: "🏗️",
      title: "Civil Engineering",
      desc: "Infrastructure design and construction supervision.",
    },
    {
      icon: "⚙️",
      title: "Mechanical Works",
      desc: "Plumbing, HVAC, and machinery installation.",
    },
    {
      icon: "💡",
      title: "Electrical Engineering",
      desc: "Power distribution and control systems.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-[#0b3b4a] mb-10">
          Our Core Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{c.icon}</div>
              <h4 className="font-bold text-lg mb-2">{c.title}</h4>
              <p className="text-gray-600 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="About"
          className="rounded-2xl shadow-lg animate-fadeIn"
        />
        <div>
          <h3 className="text-3xl font-bold text-[#0b3b4a] mb-4">
            About Arching Design
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We are a leading engineering consultancy delivering high-quality
            projects across Nepal. Our expert team combines innovative design,
            sustainability, and precision to bring infrastructure visions to
            life. From residential to industrial, we ensure excellence at every
            step.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-[#0b3b4a] text-white px-6 py-3 rounded-full hover:bg-[#145a6a] transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-3xl font-bold text-[#0b3b4a] mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-600 mb-6">
            Have a project in mind? Reach out to discuss how we can collaborate
            and bring your ideas to life.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>📍 Kathmandu, Nepal</li>
            <li>📧 info@vumiengineering.com.np</li>
            <li>📞 +977-1-1234567</li>
          </ul>
        </div>
        <form className="bg-gray-50 p-8 rounded-2xl shadow-md space-y-4">
          <input
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0b3b4a]"
            placeholder="Your Name"
          />
          <input
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0b3b4a]"
            placeholder="Your Email"
          />
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-[#0b3b4a]"
            placeholder="Your Message"
          />
          <button className="bg-[#ff6b00] text-white px-6 py-3 rounded-full hover:bg-[#ff8533] transition-transform transform hover:scale-105">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0b3b4a] text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img src={logo_bg} alt="logo" className="h-10 mb-3" />
          <p className="text-sm opacity-80">
            Arching Design Consortium Pvt. Ltd.
            <br />
            Committed to quality and innovation.
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Quick Links</h5>
          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <a href="#home" className="hover:text-[#ff6b00]">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#ff6b00]">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#ff6b00]">
                Projects
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Contact Info</h5>
          <p className="text-sm opacity-80">
            📞 +977-1-1234567
            <br />
            📧 info@vumiengineering.com.np
          </p>
        </div>
      </div>
      <div className="mt-10 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Vumi Engineering. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-white overflow-x-hidden">
      <TopBar />
      <Header />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

// index.css additions (place below Tailwind directives):
// .animate-fadeIn { animation: fadeIn 1.2s ease-in-out both; }
// .animate-fadeUp { animation: fadeUp 1s ease-in-out both; }
// .animate-slideDown { animation: slideDown 0.8s ease both; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
// @keyframes slideDown { from { transform: translateY(-30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
