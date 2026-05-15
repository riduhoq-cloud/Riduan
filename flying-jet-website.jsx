import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, MapPin, Users, Calendar, Wind, Plane, Shield, MapIcon, Passport, Building2, Home, Globe, Star, ArrowRight, Mail, Phone, MessageCircle, MapPinned } from 'lucide-react';

const FlyingJetWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Tours', id: 'tours' },
    { label: 'Visa', id: 'visa' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  // Destination data
  const destinations = [
    { name: 'Dubai', price: '$599', duration: '5 days', image: '🏙️', rating: 4.8, reviews: 324 },
    { name: 'Thailand', price: '$499', duration: '7 days', image: '🏝️', rating: 4.9, reviews: 456 },
    { name: 'Malaysia', price: '$450', duration: '6 days', image: '🌴', rating: 4.7, reviews: 289 },
    { name: 'Turkey', price: '$549', duration: '8 days', image: '🕌', rating: 4.8, reviews: 312 },
    { name: 'Maldives', price: '$799', duration: '5 days', image: '🌊', rating: 5.0, reviews: 567 },
    { name: 'Singapore', price: '$529', duration: '4 days', image: '🏗️', rating: 4.7, reviews: 198 },
  ];

  // Services
  const services = [
    { icon: '✈️', title: 'International Air Tickets', desc: 'Global flight bookings with best prices' },
    { icon: '🛫', title: 'Domestic Air Tickets', desc: 'Local flight reservations across Asia' },
    { icon: '🛂', title: 'Visa Processing', desc: 'Fast-track visa applications & support' },
    { icon: '📦', title: 'Tour Packages', desc: 'Curated holiday experiences worldwide' },
    { icon: '🏨', title: 'Hotel Booking', desc: 'Luxury to budget accommodations' },
    { icon: '🕌', title: 'Umrah Packages', desc: 'Sacred spiritual journey packages' },
    { icon: '🎓', title: 'Student Consultancy', desc: 'Education abroad planning & visa' },
    { icon: '💼', title: 'Corporate Travel', desc: 'Business travel management solutions' },
  ];

  // Visa services
  const visaServices = [
    { country: 'United Kingdom', processing: '15-20 days', type: 'Visitor/Work Visa' },
    { country: 'Canada', processing: '20-25 days', type: 'Study/Work Permit' },
    { country: 'Australia', processing: '18-22 days', type: 'Visitor/Work Visa' },
    { country: 'USA', processing: '25-30 days', type: 'Tourist/Business Visa' },
    { country: 'Schengen', processing: '15-20 days', type: 'European Visa' },
    { country: 'Japan', processing: '10-15 days', type: 'Tourist Visa' },
  ];

  // Testimonials
  const testimonials = [
    { name: 'Sarah Khan', location: 'Dhaka', text: 'Flying Jet made my Dubai trip unforgettable with seamless booking and excellent support!', rating: 5 },
    { name: 'Ahmed Hassan', location: 'Chittagong', text: 'Best visa processing experience. Professional team and quick results. Highly recommended!', rating: 5 },
    { name: 'Fatima Ahmed', location: 'Sylhet', text: 'Amazing tour packages at great prices. Will definitely use Flying Jet for my next holiday!', rating: 4.8 },
  ];

  // Airlines
  const airlines = ['🛫 Emirates', '✈️ Qatar Airways', '🛬 Turkish Airlines', '✈️ Singapore Airlines', '🛫 Thai Airways', '✈️ Malaysia Airlines'];

  // Stats
  const stats = [
    { number: '50K+', label: 'Happy Travelers' },
    { number: '100+', label: 'Destinations' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Customer Support' },
  ];

  // HOME PAGE
  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all ${darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900' : 'bg-gradient-to-br from-blue-600 via-red-500 to-blue-700'}`}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '4s' }}></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <div className="mb-6 inline-block animate-bounce" style={{ animationDuration: '2s' }}>
            <Plane className="w-16 h-16 mx-auto mb-4" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Fly Beyond Borders</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">Your trusted travel partner for worldwide air tickets, visa assistance, and holiday tours</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-red-50 transform hover:scale-105 transition-all">Book Flight</button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-red-600 transform hover:scale-105 transition-all">Explore Packages</button>
            <button className="px-8 py-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transform hover:scale-105 transition-all">Contact Us</button>
          </div>
        </div>
      </section>

      {/* Flight Search Box */}
      <section className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-2xl shadow-2xl p-8`}>
            <h2 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Search Flights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Trip Type</label>
                <select className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-gray-50 border-gray-300 text-gray-800'}`}>
                  <option>Round Trip</option>
                  <option>One Way</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>From</label>
                <input type="text" placeholder="Departure" className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-gray-50 border-gray-300 text-gray-800'}`} />
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>To</label>
                <input type="text" placeholder="Destination" className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-gray-50 border-gray-300 text-gray-800'}`} />
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Date</label>
                <input type="date" className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-gray-50 border-gray-300 text-gray-800'}`} />
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>&nbsp;</label>
                <button className="w-full p-3 bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-4xl font-bold mb-4 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Featured Destinations</h2>
          <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Explore the world's most beautiful places</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, idx) => (
              <div key={idx} className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className={`h-48 flex items-center justify-center text-6xl ${darkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-blue-400 to-red-400'}`}>
                  {dest.image}
                </div>
                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{dest.name}</h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{dest.duration}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-red-600">{dest.price}</span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{dest.rating}</span>
                    </span>
                  </div>
                  <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-4xl font-bold mb-4 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Our Services</h2>
          <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Comprehensive travel solutions for every need</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, idx) => (
              <div key={idx} className={`p-6 rounded-xl text-center hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <div className="text-5xl mb-4">{svc.icon}</div>
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{svc.title}</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className={`py-20 ${darkMode ? 'bg-gradient-to-r from-gray-900 to-blue-900' : 'bg-gradient-to-r from-blue-600 to-red-600'} text-white`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-4xl font-bold mb-4 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>What Our Customers Say</h2>
          <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Join thousands of satisfied travelers</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div key={idx} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(test.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>"{test.text}"</p>
                <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{test.name}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{test.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airlines Partners */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Our Airline Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {airlines.map((airline, idx) => (
              <div key={idx} className={`p-6 rounded-xl hover:shadow-lg transition-all ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <p className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{airline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={`py-20 ${darkMode ? 'bg-gradient-to-r from-red-900 to-blue-900' : 'bg-gradient-to-r from-red-600 to-blue-600'} text-white`}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-8 opacity-90">Get exclusive deals and travel tips delivered to your inbox</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Enter your email" className="flex-1 p-4 rounded-lg text-gray-800" />
            <button className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-all">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );

  // SERVICES PAGE
  const ServicesPage = () => (
    <div className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className={`text-5xl font-bold mb-4 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Our Services</h1>
        <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Comprehensive travel solutions for every traveler</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <div key={idx} className={`p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <div className="text-6xl mb-4">{svc.icon}</div>
              <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{svc.title}</h3>
              <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{svc.desc}</p>
              <button className="text-red-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // TOURS PAGE
  const ToursPage = () => (
    <div className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className={`text-5xl font-bold mb-4 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Tour Packages</h1>
        <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Discover unforgettable destinations</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, idx) => (
            <div key={idx} className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className={`h-56 flex items-center justify-center text-7xl ${darkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-blue-400 to-red-400'}`}>
                {dest.image}
              </div>
              <div className="p-8">
                <h3 className={`text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{dest.name}</h3>
                <p className={`mb-4 flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Calendar className="w-5 h-5" /> {dest.duration}
                </p>
                <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>All-inclusive package with flights, hotel, and tours</p>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-bold text-red-600">{dest.price}</span>
                  <span className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{dest.rating}</span>
                  </span>
                </div>
                <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105">Book Package</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // VISA PAGE
  const VisaPage = () => (
    <div className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className={`text-5xl font-bold mb-4 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Visa Services</h1>
        <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Fast-track visa processing for global destinations</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visaServices.map((visa, idx) => (
            <div key={idx} className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <div className="flex items-center gap-3 mb-4">
                <Passport className="w-8 h-8 text-red-600" />
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{visa.country}</h3>
              </div>
              <p className={`mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}><strong>Type:</strong> {visa.type}</p>
              <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}><strong>Processing:</strong> {visa.processing}</p>
              <button className="w-full py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all">Apply Now</button>
            </div>
          ))}
        </div>

        <div className={`mt-16 p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
          <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Why Choose Flying Jet for Visas?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>100% Success Rate</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Expert processing with guaranteed results</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Wind className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Fast Processing</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Quick turnaround times across all countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // ABOUT PAGE
  const AboutPage = () => (
    <div>
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={`text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>About Flying Jet</h1>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Founded with a passion for connecting travelers with the world, Flying Jet International has been a trusted name in travel for over 15 years. We've helped more than 50,000 customers realize their travel dreams.
              </p>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Our expert team specializes in airline bookings, visa processing, tour planning, and comprehensive travel solutions. We combine technology with personal touch to deliver exceptional service.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
                  <p className="text-3xl font-bold text-red-600">50K+</p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Happy Travelers</p>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
                  <p className="text-3xl font-bold text-blue-600">100+</p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Destinations</p>
                </div>
              </div>
            </div>
            <div className={`h-96 rounded-2xl flex items-center justify-center text-9xl ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-blue-200 to-red-200'}`}>
              🌍
            </div>
          </div>
        </div>
      </section>

      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Our Mission</h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                To provide world-class travel solutions that make international travel accessible, affordable, and enjoyable for everyone. We believe travel opens hearts and minds, connecting people across continents.
              </p>
            </div>
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Our Vision</h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                To be the most trusted and innovative travel agency in Asia, known for excellence, reliability, and customer satisfaction. We aim to revolutionize travel planning through technology and personalized service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // CONTACT PAGE
  const ContactPage = () => (
    <div className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className={`text-5xl font-bold mb-4 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Contact Us</h1>
        <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>We're here to help with all your travel needs</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className={`p-8 rounded-2xl text-center ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <Phone className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Phone</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>+880 1XXX XXX XXX</p>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Mon-Sat: 9AM-6PM</p>
          </div>
          <div className={`p-8 rounded-2xl text-center ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Email</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>info@flyingjet.com</p>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>support@flyingjet.com</p>
          </div>
          <div className={`p-8 rounded-2xl text-center ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <MapPinned className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Location</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Dhaka, Bangladesh</p>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>24/7 Support Available</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Send us a Message</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className={`w-full p-4 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`} />
              <input type="email" placeholder="Your Email" className={`w-full p-4 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`} />
              <textarea placeholder="Your Message" rows="5" className={`w-full p-4 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}></textarea>
              <button className="w-full py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all">Send Message</button>
            </form>
          </div>

          <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Quick Links</h2>
            <div className="space-y-3">
              <button className={`flex items-center gap-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                <MessageCircle className="w-5 h-5" /> WhatsApp: +880 1XXX XXX XXX
              </button>
              <button className={`flex items-center gap-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                <MessageCircle className="w-5 h-5" /> Facebook Messenger
              </button>
              <button className={`flex items-center gap-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                <Globe className="w-5 h-5" /> Follow us on social media
              </button>
              <button className={`flex items-center gap-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                <Building2 className="w-5 h-5" /> Visit our office
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // RENDER PAGES
  const renderPage = () => {
    switch(currentPage) {
      case 'services': return <ServicesPage />;
      case 'tours': return <ToursPage />;
      case 'visa': return <VisaPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors`}>
      {/* Navbar */}
      <nav className={`${scrolled ? (darkMode ? 'bg-gray-800 shadow-lg' : 'bg-white shadow-lg') : darkMode ? 'bg-gray-900' : 'bg-white'} sticky top-0 z-50 transition-all`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <Plane className="w-8 h-8 text-red-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Flying Jet</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`font-semibold transition-colors ${currentPage === item.id ? 'text-red-600' : darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden mt-4 pb-4 space-y-2 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${currentPage === item.id ? 'bg-red-600 text-white' : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      {renderPage()}

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800' : 'bg-gray-900'} text-white py-12`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Flying Jet</h3>
              <p className="opacity-75">Your trusted travel partner for worldwide adventures</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 opacity-75">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-red-400">Home</button></li>
                <li><button onClick={() => setCurrentPage('services')} className="hover:text-red-400">Services</button></li>
                <li><button onClick={() => setCurrentPage('tours')} className="hover:text-red-400">Tours</button></li>
                <li><button onClick={() => setCurrentPage('visa')} className="hover:text-red-400">Visa</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 opacity-75">
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-red-400">Contact</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-red-400">About</button></li>
                <li className="hover:text-red-400">Terms & Conditions</li>
                <li className="hover:text-red-400">Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <p className="opacity-75 mb-2">📧 info@flyingjet.com</p>
              <p className="opacity-75 mb-2">📱 +880 1XXX XXX XXX</p>
              <div className="flex gap-4 mt-4">
                <button className="hover:text-blue-400">Facebook</button>
                <button className="hover:text-green-400">WhatsApp</button>
                <button className="hover:text-blue-300">Instagram</button>
              </div>
            </div>
          </div>
          <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-700'} pt-8 text-center opacity-75`}>
            <p>&copy; 2024 Flying Jet International. All rights reserved. | Connecting Dreams Worldwide</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all text-2xl z-40">
        💬
      </button>
    </div>
  );
};

export default FlyingJetWebsite;
