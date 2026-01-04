import React, { useState } from 'react';
import { ShieldAlert, Flame, BookOpen, Settings, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sector: 'Residential',
    service: 'Procurement',
    message: ''
  });

  const [status, setStatus] = useState(""); // Add this to track submission status

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Change YOUR_FORM_ID to the ID you got from Formspree
    const FORMSPREE_URL = "https://formspree.io/f/xvzgbgyo";

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setFormData({ name: '', email: '', phone: '', sector: 'Residential', service: 'Procurement', message: '' });
        alert("Success! Your request has been sent. Our rep will reach out to you shortly.");
      } else {
        setStatus("ERROR");
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      setStatus("ERROR");
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* --- Navigation --- */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src='https://firebasestorage.googleapis.com/v0/b/my-portfolio-f5672.appspot.com/o/shiled.png?alt=media&token=7e017f7e-e2f8-499e-bdd9-7c64dd9a8f10' className="text-red-600 w-8 h-8" />
            <span className="text-2xl font-bold tracking-tight">SEM<span className="text-red-600">AFC</span></span>
          </div>
          <div className="hidden md:flex gap-8 font-medium">
            <a href="#services" className="hover:text-red-600 transition">Services</a>
            <a href="#sectors" className="hover:text-red-600 transition">Sectors</a>
            <a href="#contact" className="hover:text-red-600 transition">Contact Us</a>
          </div>
          <a href="#contact" className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition">
            Get a Quote
          </a>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header className="relative bg-slate-900 text-white py-24 px-4">
        <div className="absolute inset-0 opacity-40 overflow-hidden">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-f5672.appspot.com/o/background.png?alt=media&token=8a79785c-00e5-480d-8715-f5a33f56434b"
            alt="Fire Safety Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Protecting Lives, Property, <br /><span className="text-red-500">and Your Future.</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Certified fire safety experts specializing in the procurement, installation, and maintenance of premium fire equipment for homes, offices, and industries.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition">
              Book a Safety Audit
            </a>
            <a href="#services" className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg text-lg font-bold transition">
              View Services
            </a>
          </div>
        </div>
      </header>

      {/* --- Services Section --- */}
      <section id="services" className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <ShieldAlert className="w-10 h-10 text-red-600" />,
              title: "Procurement",
              desc: "Supply of high-grade, certified fire extinguishers (CO2, Dry Powder, Water, Foam)."
            },
            {
              icon: <Settings className="w-10 h-10 text-red-600" />,
              title: "Installation",
              desc: "Strategic placement and mounting according to safety regulatory standards."
            },
            {
              icon: <CheckCircle className="w-10 h-10 text-red-600" />,
              title: "Servicing",
              desc: "Routine maintenance, pressure testing, and refilling of existing units."
            },
            {
              icon: <BookOpen className="w-10 h-10 text-red-600" />,
              title: "Training",
              desc: "Fire drills, safety lectures, and equipment handling workshops for staff."
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Target Sectors --- */}
      <section id="sectors" className="bg-slate-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Solutions for Every Environment</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-10 rounded-lg shadow">
              <h4 className="text-2xl font-bold text-red-600 mb-2">Residential</h4>
              <p>Keep your family and home safe with localized protection.</p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow">
              <h4 className="text-2xl font-bold text-red-600 mb-2">Corporate</h4>
              <p>Workplace safety compliance for offices and retail spaces.</p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow">
              <h4 className="text-2xl font-bold text-red-600 mb-2">Industrial</h4>
              <p>Heavy-duty fire suppression systems for factories and plants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact & Lead Form --- */}
      <section id="contact" className="py-20 max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Contact Info */}
          <div className="md:w-1/3 bg-red-600 p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Contact Info</h2>
            <p className="mb-8 opacity-90">Ready to secure your premises? Reach out to us for a consultation.</p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6" /> <span>+234 (813) 090-0145</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6" /> <span>markoladeinde@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6" /> <span>9A, Bode Joseph Street, Gbagada, Lagos</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:w-2/3 p-12">
            <h2 className="text-3xl font-bold mb-8 text-slate-800">Request a Service</h2>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text" name="name" required
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 outline-none"
                  value={formData.name} onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input
                  type="string" name="phone" required
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 outline-none"
                  value={formData.phone} onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email" name="email" required
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 outline-none"
                  value={formData.email} onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Client Sector</label>
                <select
                  name="sector"
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 outline-none"
                  value={formData.sector} onChange={handleChange}
                >
                  <option>Residential</option>
                  <option>Office/Corporate</option>
                  <option>Factory/Industrial</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Service Needed</label>
                <select
                  name="service"
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 outline-none"
                  value={formData.service} onChange={handleChange}
                >
                  <option>New Procurement</option>
                  <option>Installation</option>
                  <option>Servicing & Maintenance</option>
                  <option>Training & Lectures</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message" rows="4"
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-500 outline-none"
                  value={formData.message} onChange={handleChange}
                  placeholder="Tell us more about your specific needs..."
                ></textarea>
              </div>
              <button className="md:col-span-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition uppercase tracking-wider">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white">
            <img src='https://firebasestorage.googleapis.com/v0/b/my-portfolio-f5672.appspot.com/o/shiled.png?alt=media&token=7e017f7e-e2f8-499e-bdd9-7c64dd9a8f10' className="text-red-600 w-6 h-6" />
            <span className="text-xl font-bold">SEMAFC</span>
          </div>
          <p>© {new Date().getFullYear()} SEMAFC & Sons Enterprises. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>

      {/* Vercel Web Analytics */}
      <Analytics />

      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </div>
  );
};

export default LandingPage;