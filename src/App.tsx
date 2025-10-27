// VumiEngineering - React + Vite (Enhanced with Beautiful Custom CSS)
// This version improves the aesthetic using Tailwind + custom CSS animations and gradients.
//
// Steps are the same: create Vite + React, install Tailwind, copy this code into src/App.jsx, etc.

import "./App.css";
import "./index.css";

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
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 animate-slideDown">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="data:image/png;base64,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"
            alt="Vumi Engineering"
            className="rounded-2xl shadow-lg animate-fadeIn bg-red-600"
          />
          <h1 className="text-2xl font-extrabold text-[#0b3b4a] tracking-tight">
            Vumi Engineering
          </h1>
        </div>

        <nav>
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
      </div>
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

function Projects() {
  const projects = [
    {
      title: "Bridge Construction",
      img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Urban Infrastructure",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Mechanical Works",
      img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Electrical Design",
      img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Building Projects",
      img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Industrial Installations",
      img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-[#0b3b4a] mb-10 text-center">
          Recent Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url('${p.img}')` }}
              ></div>
              <div className="absolute inset-0 bg-[#0b3b4a]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <h4 className="text-white text-xl font-bold">{p.title}</h4>
              </div>
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
            About Vumi Engineering
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
          <img src="/logo-white.png" alt="logo" className="h-10 mb-3" />
          <p className="text-sm opacity-80">
            Vumi Engineering Consortium Pvt. Ltd.
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
