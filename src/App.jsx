import React, { useState, useEffect } from 'react';


// --- 1. HOME PAGE COMPONENT ---
function HomePage({ setPage }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-5 text-center animate-fade-in-up">
      <h1 className="text-[3rem] md:text-[4.5rem] font-extrabold text-[#003469] dark:text-blue-400 mb-6 leading-tight tracking-tight transition-colors">
        Hyundai Truck & Bus
      </h1>
      <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-16 max-w-2xl font-light transition-colors">
        Explore our world-class lineup of commercial vehicles designed for maximum performance, durability, and efficiency.
      </p>
      
      <img 
        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&w=1200&q=80" 
        alt="Hyundai Commercial Truck" 
        className="w-full max-w-[1000px] h-auto rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-shadow"
      />
      
      <div style={{ marginTop: '80px', marginBottom: '40px' }}>
        <button
          onClick={() => setPage('products')}
          className="bg-[#003469] dark:bg-blue-600 text-[#FFFFFF] border-none outline-none ring-0 px-14 py-5 rounded-full text-xl font-bold hover:bg-blue-800 dark:hover:bg-blue-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,52,105,0.3)] transition-all duration-300 cursor-pointer"
        >
          Explore the Catalog
        </button>
      </div>
    </div>
  );
}

// --- 2. XCIENT DETAIL PAGE COMPONENT ---
function XcientDetailPage({ setPage }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <>
      <div className="animate-fade-in-up bg-white dark:bg-gray-900 min-h-screen pb-20 relative transition-colors">
        <div className="relative w-full h-[500px] bg-black flex items-center justify-center overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&w=1920&q=80" 
            alt="Xcient Hero" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10 text-center px-5">
            <h1 className="text-[3.5rem] md:text-[5rem] font-black text-[#FFFFFF] mb-4 tracking-tight drop-shadow-2xl">
              XCIENT
            </h1>
            <p className="text-xl text-[#FFFFFF] font-medium tracking-wide drop-shadow-lg">
              The Future of Heavy-Duty Transport
            </p>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <button 
            onClick={() => setPage('products')}
            className="mb-12 flex items-center gap-2 text-[#003469] dark:text-blue-400 font-bold hover:text-blue-800 dark:hover:text-blue-300 transition-colors border-none outline-none bg-transparent cursor-pointer"
          >
            <span className="text-2xl leading-none">&larr;</span> Back to Catalog
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight transition-colors">
                Uncompromising Power.<br/>Unmatched Efficiency.
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6 transition-colors">
                The Hyundai XCIENT sets a new standard for commercial transport. Available in both advanced diesel and groundbreaking Fuel Cell variants, it is engineered to deliver maximum payload capacity while significantly reducing operating costs.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors">
                Experience a driver-focused cabin featuring ergonomic seating, cutting-edge digital displays, and advanced safety assistance systems designed to protect you on every journey.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <img 
                 src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&w=800&q=80" 
                 onClick={() => setLightboxImage("https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&w=1600&q=90")}
                 className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-80 transition-opacity duration-300" 
                 alt="Heavy Duty Truck View 1" 
               />
               <img 
                 src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&w=800&q=80" 
                 onClick={() => setLightboxImage("https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&w=1600&q=90")}
                 className="w-full h-full object-cover rounded-2xl shadow-lg mt-8 cursor-pointer hover:opacity-80 transition-opacity duration-300" 
                 alt="Heavy Duty Truck View 2" 
               />
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-[2rem] p-10 md:p-16 text-center transition-colors">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 transition-colors">Key Specifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-black text-[#003469] dark:text-blue-400 mb-2 transition-colors">350<span className="text-xl">kW</span></div>
                <div className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-widest font-bold">Max Output</div>
              </div>
              <div>
                <div className="text-4xl font-black text-[#003469] dark:text-blue-400 mb-2 transition-colors">43<span className="text-xl">t</span></div>
                <div className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-widest font-bold">Max GCW</div>
              </div>
              <div>
                <div className="text-4xl font-black text-[#003469] dark:text-blue-400 mb-2 transition-colors">400<span className="text-xl">km</span></div>
                <div className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-widest font-bold">Range (FC)</div>
              </div>
              <div>
                <div className="text-4xl font-black text-[#003469] dark:text-blue-400 mb-2 transition-colors">Zero</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-widest font-bold">Emissions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightboxImage && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 999999, backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyItems: 'center', padding: '20px' }}>
          <button 
            onClick={() => setLightboxImage(null)}
            style={{ position: 'absolute', top: '20px', right: '30px', cursor: 'pointer', background: 'transparent', border: 'none', color: '#FFF', fontSize: '3rem' }}
          >
            &times;
          </button>
          <img 
            src={lightboxImage} 
            alt="Enlarged view" 
            style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain', margin: 'auto' }} 
          />
        </div>
      )}
    </>
  );
}

// --- 3. CONTACT PAGE COMPONENT ---
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleOfInterest: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch('https://hyundai-catalog-2.onrender.com/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus({ loading: false, success: data.message, error: null });
        setFormData({ name: '', email: '', phone: '', vehicleOfInterest: '', message: '' }); 
      } else {
        setStatus({ loading: false, success: null, error: data.message || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ loading: false, success: null, error: 'Failed to connect to the server. Make sure your Node API is running.' });
    }
  };

  return (
    <div className="max-w-[800px] mx-auto px-6 py-20 animate-fade-in-up">
      <div className="text-center mb-12">
        <h2 className="text-[2.5rem] font-extrabold text-[#003469] dark:text-blue-400 mb-4 tracking-tight transition-colors">Contact Us</h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg transition-colors">Have a question about our vehicles? Send us a message and our team will get back to you shortly.</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:shadow-none transition-colors">
        
        {/* SUCCESS MESSAGE */}
        {status.success && (
          <div 
            style={{ 
              marginBottom: '32px', 
              padding: '20px 24px', 
              backgroundColor: '#F0FDF4', 
              border: '1.5px solid #BBF7D0', 
              borderRadius: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              boxShadow: '0 10px 25px rgba(34, 197, 94, 0.08)'
            }}
            className="animate-fade-in-up"
          >
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div>
              <h4 style={{ margin: 0, color: '#15803D', fontSize: '1.05rem', fontWeight: '800' }}>Inquiry Sent!</h4>
              <p style={{ margin: '4px 0 0 0', color: '#166534', fontSize: '0.95rem', fontWeight: '500' }}>{status.success}</p>
            </div>
          </div>
        )}

        {/* ERROR MESSAGE */}
        {status.error && (
          <div 
            style={{ 
              marginBottom: '32px', 
              padding: '20px 24px', 
              backgroundColor: '#FEF2F2', 
              border: '1.5px solid #FECACA', 
              borderRadius: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              boxShadow: '0 10px 25px rgba(239, 68, 68, 0.08)'
            }}
            className="animate-fade-in-up"
          >
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <div>
              <h4 style={{ margin: 0, color: '#B91C1C', fontSize: '1.05rem', fontWeight: '800' }}>Submission Failed</h4>
              <p style={{ margin: '4px 0 0 0', color: '#991B1B', fontSize: '0.95rem', fontWeight: '500' }}>{status.error}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {/* ROW 1: Name and Email */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '12px' }} className="text-sm font-extrabold text-gray-800 dark:text-gray-200 uppercase tracking-wider transition-colors">Full Name *</label>
              <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 dark:text-white rounded-[1rem] focus:outline-none focus:border-[#003469] dark:focus:border-blue-400 focus:ring-2 focus:ring-[#003469]/20 transition-all text-base" placeholder="John Doe" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '12px' }} className="text-sm font-extrabold text-gray-800 dark:text-gray-200 uppercase tracking-wider transition-colors">Email Address *</label>
              <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 dark:text-white rounded-[1rem] focus:outline-none focus:border-[#003469] dark:focus:border-blue-400 focus:ring-2 focus:ring-[#003469]/20 transition-all text-base" placeholder="john@example.com" />
            </div>
          </div>

          {/* ROW 2: Phone and Vehicle */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '12px' }} className="text-sm font-extrabold text-gray-800 dark:text-gray-200 uppercase tracking-wider transition-colors">Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 dark:text-white rounded-[1rem] focus:outline-none focus:border-[#003469] dark:focus:border-blue-400 focus:ring-2 focus:ring-[#003469]/20 transition-all text-base" placeholder="+1 (555) 000-0000" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '12px' }} className="text-sm font-extrabold text-gray-800 dark:text-gray-200 uppercase tracking-wider transition-colors">Vehicle of Interest *</label>
              <input type="text" name="vehicleOfInterest" required value={formData.vehicleOfInterest} onChange={handleInputChange} className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 dark:text-white rounded-[1rem] focus:outline-none focus:border-[#003469] dark:focus:border-blue-400 focus:ring-2 focus:ring-[#003469]/20 transition-all text-base" placeholder="e.g., XCIENT Fuel Cell" />
            </div>
          </div>

          {/* ROW 3: Message */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ marginBottom: '12px' }} className="text-sm font-extrabold text-gray-800 dark:text-gray-200 uppercase tracking-wider transition-colors">Message</label>
            <textarea name="message" rows="5" value={formData.message} onChange={handleInputChange} className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 dark:text-white rounded-[1rem] focus:outline-none focus:border-[#003469] dark:focus:border-blue-400 focus:ring-2 focus:ring-[#003469]/20 transition-all resize-none text-base" placeholder="How can we help you?"></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button 
            type="submit" 
            disabled={status.loading}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '16px' }}
            className={`w-full bg-gradient-to-r from-[#003469] to-[#004b99] dark:from-blue-600 dark:to-blue-800 text-[#FFFFFF] py-5 rounded-[1.25rem] text-[1.1rem] uppercase tracking-widest font-black transition-all duration-300 shadow-[0_15px_30px_rgba(0,52,105,0.25)] cursor-pointer border-none outline-none ${status.loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-[0_20px_40px_rgba(0,52,105,0.4)] hover:-translate-y-1.5 hover:from-[#002a54] hover:to-[#003469] dark:hover:from-blue-500 dark:hover:to-blue-700'}`}
          >
            {status.loading ? (
              'Sending Inquiry...'
            ) : (
              <>
                <span>Submit Inquiry</span>
                
                {/* BULLETPROOF ARROW ICON */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  style={{ width: '18px', height: '18px', flexShrink: 0, marginLeft: '12px' }}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

// --- 4. FOOTER COMPONENT ---
function Footer() {
  return (
    <footer className="bg-[#111111] dark:bg-black text-[#FFFFFF] py-12 px-6 mt-auto border-t border-gray-800 transition-colors">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-black tracking-tighter text-[#FFFFFF] mb-2">HYUNDAI TRUCK & BUS</h2>
          <p className="text-gray-400 text-sm font-light">Engineered for performance, built for reliability.</p>
        </div>
        <div className="text-gray-400 text-sm font-light">
          &copy; {new Date().getFullYear()} Hyundai Commercial Vehicle. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// --- 5. VEHICLE CATALOG COMPONENT ---
function VehicleCatalog({ setPage, onSelectVehicle }) {
  const [categories, setCategories] = useState([]);
  const [currentTab, setCurrentTab] = useState('');
  const [currentVehicles, setCurrentVehicles] = useState([]);

  useEffect(() => {
    fetch('https://hyundai-catalog-2.onrender.com/api/vehicles')
      .then(response => {
        if (!response.ok) throw new Error('API failed');
        return response.json();
      })
      .then(data => {
        const extractedCategories = Object.keys(data);
        setCategories(extractedCategories);
        if (extractedCategories.length > 0 && !currentTab) {
          setCurrentTab(extractedCategories[0]);
        }
      })
      .catch(error => {
        fetch(`/data.json?v=${new Date().getTime()}`)
          .then(res => res.json())
          .then(data => {
            const extractedCategories = Object.keys(data);
            setCategories(extractedCategories);
            if (extractedCategories.length > 0 && !currentTab) {
              setCurrentTab(extractedCategories[0]);
            }
          });
      });
  }, []);

  useEffect(() => {
    if (!currentTab) return;

    fetch(`https://hyundai-catalog-2.onrender.com/api/vehicles/category/${currentTab}`)
      .then(response => {
        if (!response.ok) throw new Error('API failed');
        return response.json();
      })
      .then(data => setCurrentVehicles(data))
      .catch(() => {
        fetch(`/data.json?v=${new Date().getTime()}`)
          .then(res => res.json())
          .then(data => setCurrentVehicles(data[currentTab] || []));
      });
  }, [currentTab]);

  const handleCardClick = (vehicle) => {
    if (vehicle?.name && vehicle.name.toLowerCase().includes('xcient')) {
      setPage('xcient-details');
    } else {
      onSelectVehicle(vehicle);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });

  return (
    <div className="p-4 sm:p-8 animate-fade-in-up relative min-h-screen flex flex-col justify-between">
      <div>
        <header className="text-center" style={{ marginTop: '20px', marginBottom: '80px' }}>
          <h2 className="text-[2.2rem] font-extrabold text-gray-800 dark:text-gray-100 mb-10 tracking-tight transition-colors">Our Vehicles</h2>
          
          <div className="flex justify-center flex-wrap gap-4 sm:gap-6">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setCurrentTab(category)}
                className={`px-8 py-3 text-[15px] font-bold rounded-full border-none outline-none ring-0 transition-all duration-300 cursor-pointer ${
                  currentTab === category 
                    ? 'bg-[#003469] dark:bg-blue-600 text-[#FFFFFF] shadow-[0_10px_25px_rgba(0,52,105,0.3)] scale-105' 
                    : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-300 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:text-[#003469] dark:hover:text-blue-400 hover:-translate-y-0.5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </header>

        <main className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10">
            {currentVehicles.map((subCategory, index) => (
              subCategory.children?.map(vehicle => {
                const isDark = vehicle.font_white_yn === 'Y';
                return (
                  <div 
                    key={`${vehicle.code}-${index}`}
                    onClick={() => handleCardClick(vehicle)}
                    className={`group h-full flex flex-col rounded-[1.5rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer ${
                      isDark 
                        ? 'bg-[#222] dark:bg-gray-900 text-[#FFFFFF] hover:bg-white dark:hover:bg-gray-700 hover:text-[#333] dark:hover:text-white' 
                        : 'bg-white dark:bg-gray-800 text-[#333] dark:text-gray-100 hover:bg-[#222] dark:hover:bg-gray-700 hover:text-[#FFFFFF]'
                    }`}
                  >
                    <div className={`w-full h-[150px] sm:h-[180px] lg:h-[220px] flex items-center justify-center overflow-hidden bg-gradient-to-b transition-colors duration-300 ${
                      isDark 
                        ? 'from-[#2a2a2a] to-[#222] dark:from-gray-800 dark:to-gray-900 group-hover:from-gray-50 group-hover:to-white dark:group-hover:from-gray-600 dark:group-hover:to-gray-700' 
                        : 'from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 group-hover:from-[#2a2a2a] group-hover:to-[#222] dark:group-hover:from-gray-600 dark:group-hover:to-gray-700'
                    }`}>
                      <img 
                        src={vehicle.thumb || 'https://via.placeholder.com/300x200?text=No+Image'} 
                        alt={vehicle.name} 
                        className="w-full h-full object-contain p-4 sm:p-6 lg:p-8 group-hover:scale-110 transition-transform duration-500 drop-shadow-md"
                      />
                    </div>
                    
                    <div className="flex flex-col flex-grow p-4 sm:p-6 lg:p-7 justify-between transition-colors duration-300">
                      <div>
                        <h3 className="text-[1rem] sm:text-[1.2rem] font-bold mb-2 leading-snug tracking-tight group-hover:text-[#FFFFFF] dark:group-hover:text-white">
                          {vehicle.name}
                        </h3>
                      </div>
                      <p className={`text-[0.8rem] sm:text-[0.9rem] font-medium pt-3 mt-auto transition-colors duration-300 ${
                        isDark 
                          ? 'text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300' 
                          : 'text-gray-500 dark:text-gray-400 group-hover:text-[#FFFFFF] dark:group-hover:text-white'
                      }`}>
                        {vehicle.info1 || 'Standard Specs'} {vehicle.info2 ? ` • ${vehicle.info2} PS` : ''}
                      </p>
                    </div>
                  </div>
                );
              })
            ))}
          </div>
        </main>
      </div>

      {/* FLOATING ARROW BUTTONS */}
      <div style={{ position: 'fixed', right: '24px', bottom: '32px', zIndex: 30, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <button 
          onClick={scrollToTop}
          style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#003469', border: '2px solid #FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,0,0,0.2)', transition: 'transform 0.2s' }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          title="Scroll to Top"
          className="dark:bg-blue-600 dark:border-gray-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19L12 5" />
            <path d="M5 12L12 5L19 12" />
          </svg>
        </button>

        <button 
          onClick={scrollToBottom}
          style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#003469', border: '2px solid #FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,0,0,0.2)', transition: 'transform 0.2s' }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          title="Scroll to Bottom"
          className="dark:bg-blue-600 dark:border-gray-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5L12 19" />
            <path d="M19 12L12 19L5 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
// --- 7. ADMIN INVENTORY DASHBOARD ---
function AdminPage() {
  const [inventory, setInventory] = useState([]);
  const [formData, setFormData] = useState({ id: null, name: '', type: '', price: '' });
  const [isEditing, setIsEditing] = useState(false);
  
  // TOAST STATE
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });

  // PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // CUSTOM DELETE MODAL STATE
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, idToDelete: null });

  // HELPER FUNCTION: SHOW TOAST
  const showToast = (message, type = 'success') => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3000);
  };

  // READ (GET)
  const fetchInventory = async () => {
    try {
      const res = await fetch('https://hyundai-catalog-2.onrender.com/api/admin/inventory');
      const data = await res.json();
      setInventory(data);
    } catch (err) {
      console.error("Failed to fetch inventory", err);
      showToast("Failed to load inventory. Is the server running?", "error");
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  // HANDLE FORM TYPING
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // CREATE (POST) & UPDATE (PUT)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isEditing 
      ? `https://hyundai-catalog-2.onrender.com/api/admin/inventory/${formData.id}`
      : 'https://hyundai-catalog-2.onrender.com/api/admin/inventory';
      
    const method = isEditing ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        showToast(isEditing ? "Vehicle updated successfully!" : "Vehicle added successfully!", "success");
        setFormData({ id: null, name: '', type: '', price: '' });
        setIsEditing(false);
        fetchInventory();
      } else {
        showToast("Failed to save vehicle.", "error");
      }
    } catch (error) {
      showToast("Server error. Could not save data.", "error");
    }
  };

  // POPULATE FORM FOR EDITING
  const handleEdit = (item) => {
    setFormData(item);
    setIsEditing(true);
  };

  // --- NEW DELETE LOGIC ---
  // 1. Open the modal instead of the browser confirm
  const handleDeleteClick = (id) => {
    setDeleteModal({ isOpen: true, idToDelete: id });
  };

  // 2. Execute delete when user clicks "Delete" in our custom modal
  const executeDelete = async () => {
    if (!deleteModal.idToDelete) return;
    
    try {
      const response = await fetch(`https://hyundai-catalog-2.onrender.com/api/admin/inventory/${deleteModal.idToDelete}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        showToast("Vehicle deleted successfully!", "success");
        fetchInventory();
        
        // If deleting the last item on the current page, go back one page
        if (currentItems.length === 1 && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      } else {
        showToast("Failed to delete vehicle.", "error");
      }
    } catch (error) {
      showToast("Server error. Could not delete data.", "error");
    } finally {
      // Always close the modal afterwards
      setDeleteModal({ isOpen: false, idToDelete: null });
    }
  };

  // --- PAGINATION LOGIC ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = inventory.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(inventory.length / itemsPerPage);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when changing page size
  };

  return (
    <div className="max-w-[1000px] mx-auto px-6 py-16 animate-fade-in-up relative">
      
      {/* FLOATING TOAST NOTIFICATION */}
      {toast.visible && (
        <div 
          style={{ zIndex: 9999 }}
          className={`fixed bottom-10 right-10 flex items-center gap-3 px-6 py-4 rounded-[1rem] shadow-[0_15px_30px_rgba(0,0,0,0.2)] text-white font-bold transition-all duration-500 animate-fade-in-up ${
            toast.type === 'success' ? 'bg-[#22C55E]' : 'bg-[#EF4444]'
          }`}
        >
          {toast.type === 'success' ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          )}
          {toast.message}
        </div>
      )}

      {/* CUSTOM DELETE CONFIRMATION MODAL */}
      {deleteModal.isOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 99999, backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
          <div className="bg-white dark:bg-gray-800 rounded-[2rem] shadow-2xl w-full max-w-sm p-8 text-center border border-gray-200 dark:border-gray-700 animate-fade-in-up">
            
            {/* Warning Icon */}
            <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Delete Vehicle?</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">This action cannot be undone. Are you sure you want to permanently remove this vehicle?</p>
            
            <div className="flex gap-3">
              <button 
                onClick={() => setDeleteModal({ isOpen: false, idToDelete: null })} 
                className="flex-1 px-4 py-3.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button 
                onClick={executeDelete} 
                className="flex-1 px-4 py-3.5 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 shadow-[0_10px_20px_rgba(239,68,68,0.3)] transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mb-10">
        <h2 className="text-3xl font-black text-[#003469] dark:text-blue-400 mb-2">Inventory Management</h2>
        <p className="text-gray-500 dark:text-gray-400">Add, update, or remove vehicles from the database.</p>
      </div>

      {/* ADD / EDIT FORM */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg mb-10 transition-colors">
        <h3 className="text-lg font-bold mb-4 dark:text-white">
          {isEditing ? "Edit Vehicle" : "Add New Vehicle"}
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-end">
          <div className="flex-1 w-full">
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-2">Vehicle Name</label>
            <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 dark:text-white rounded-xl focus:outline-none focus:border-[#003469] dark:focus:border-blue-400" placeholder="e.g. Universe Bus" />
          </div>
          <div className="flex-1 w-full">
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-2">Category</label>
            <input type="text" name="type" required value={formData.type} onChange={handleChange} className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 dark:text-white rounded-xl focus:outline-none focus:border-[#003469] dark:focus:border-blue-400" placeholder="Truck, Bus, etc." />
          </div>
          <div className="flex-1 w-full">
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-2">Price</label>
            <input type="text" name="price" required value={formData.price} onChange={handleChange} className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 dark:text-white rounded-xl focus:outline-none focus:border-[#003469] dark:focus:border-blue-400" placeholder="$0.00" />
          </div>
          
          <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-[#003469] dark:bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors h-[50px] cursor-pointer">
            {isEditing ? "Update" : "Add"}
          </button>
          
          {isEditing && (
            <button type="button" onClick={() => { setIsEditing(false); setFormData({ id: null, name: '', type: '', price: '' }); }} className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white font-bold rounded-xl hover:bg-gray-300 transition-colors h-[50px] cursor-pointer">
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* DATA TABLE */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-colors flex flex-col">
        <div className="overflow-x-auto pb-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 dark:hover:[&::-webkit-scrollbar-thumb]:bg-gray-500 transition-colors">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700">
                <th className="p-5 text-sm font-black text-gray-600 dark:text-gray-300 uppercase">ID</th>
                <th className="p-5 text-sm font-black text-gray-600 dark:text-gray-300 uppercase">Name</th>
                <th className="p-5 text-sm font-black text-gray-600 dark:text-gray-300 uppercase">Type</th>
                <th className="p-5 text-sm font-black text-gray-600 dark:text-gray-300 uppercase">Price</th>
                <th className="p-5 text-sm font-black text-gray-600 dark:text-gray-300 uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length === 0 ? (
                <tr><td colSpan="5" className="p-8 text-center text-gray-500">No vehicles found. Add one above!</td></tr>
              ) : (
                currentItems.map((item) => (
                  <tr key={item.id} className="border-b border-gray-50 dark:border-gray-700/50 hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-5 text-sm text-gray-500 dark:text-gray-400">{item.id}</td>
                    <td className="p-5 font-bold text-[#003469] dark:text-blue-300">{item.name}</td>
                    <td className="p-5 text-sm text-gray-700 dark:text-gray-200">{item.type}</td>
                    <td className="p-5 text-sm font-medium text-green-600 dark:text-green-400">{item.price}</td>
                    <td className="p-5 text-right space-x-3">
                      <button onClick={() => handleEdit(item)} className="text-blue-500 hover:text-blue-700 font-bold text-sm cursor-pointer">Edit</button>
                      
                      {/* Swapped window.confirm with our custom modal function */}
                      <button onClick={() => handleDeleteClick(item.id)} className="text-red-500 hover:text-red-700 font-bold text-sm cursor-pointer">Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION CONTROLS */}
        {inventory.length > 0 && (
          <div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Items Per Page Selector */}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span>Show:</span>
              <select 
                value={itemsPerPage} 
                onChange={handleItemsPerPageChange}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-2 py-1 outline-none focus:border-[#003469] dark:focus:border-blue-400 cursor-pointer text-gray-700 dark:text-gray-200 font-medium"
              >
                <option value={5}>5 rows</option>
                <option value={10}>10 rows</option>
                <option value={20}>20 rows</option>
                <option value={30}>30 rows</option>
              </select>
            </div>

            {/* Page Info */}
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, inventory.length)} of {inventory.length} entries
            </div>

            {/* Prev/Next Buttons */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-bold rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Prev
              </button>
              
              <span className="text-sm font-bold text-[#003469] dark:text-blue-400 px-2">
                Page {currentPage} of {totalPages}
              </span>
              
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages || totalPages === 0}
                className="px-4 py-2 text-sm font-bold rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Next
              </button>
            </div>
            
          </div>
        )}
      </div>

    </div>
  );
}
// --- 6. MAIN APP COMPONENT ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  
  // DARK MODE STATE
  const [isDarkMode, setIsDarkMode] = useState(false);

  // BULLETPROOF DARK MODE HOOK: 
  // This reaches out and puts the "dark" class directly on the <html> tag
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    // Replaced the messy manual logic with clean Tailwind classes: "bg-[#f8f9fa] dark:bg-gray-900"
    <div className="min-h-screen font-sans selection:bg-[#003469] selection:text-white flex flex-col justify-between transition-colors duration-300 bg-[#f8f9fa] dark:bg-gray-900 text-gray-900 dark:text-white">
      
      {/* NAVBAR */}
      <div>
        <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)] sticky top-0 z-40 transition-colors">
          
          {/* YOUR AWESOME RESPONSIVE CLASSES HERE */}
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center">
            
            <div 
              onClick={() => setCurrentPage('home')}
              className="text-2xl font-black text-[#003469] dark:text-blue-400 tracking-tighter cursor-pointer hover:opacity-80 transition-all"
            >
              HYUNDAI
            </div>
            
            <div className="flex items-center gap-4 sm:gap-8">
              <button 
                onClick={() => setCurrentPage('home')} 
                className={`text-[10px] sm:text-[13px] uppercase tracking-wider font-bold border-none outline-none transition-all cursor-pointer bg-transparent ${
                  currentPage === 'home' ? 'text-[#003469] dark:text-blue-400' : 'text-gray-400 hover:text-[#003469] dark:hover:text-blue-300'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('products')} 
                className={`text-[10px] sm:text-[13px] uppercase tracking-wider font-bold border-none outline-none transition-all cursor-pointer bg-transparent ${
                  (currentPage === 'products' || currentPage === 'xcient-details') ? 'text-[#003469] dark:text-blue-400' : 'text-gray-400 hover:text-[#003469] dark:hover:text-blue-300'
                }`}
              >
                Products
              </button>
              <button 
                onClick={() => setCurrentPage('contact')} 
                className={`text-[10px] sm:text-[13px] uppercase tracking-wider font-bold border-none outline-none transition-all cursor-pointer bg-transparent ${
                  currentPage === 'contact' ? 'text-[#003469] dark:text-blue-400' : 'text-gray-400 hover:text-[#003469] dark:hover:text-blue-300'
                }`}
              >
                Contact
              </button>
              <button 
  onClick={() => setCurrentPage('admin')} 
  className={`text-[10px] sm:text-[13px] uppercase tracking-wider font-bold border-none outline-none transition-all cursor-pointer bg-transparent ${
    currentPage === 'admin' ? 'text-[#003469] dark:text-blue-400' : 'text-gray-400 hover:text-[#003469] dark:hover:text-blue-300'
  }`}
>
  Admin
</button>

              {/* DARK MODE TOGGLE BUTTON */}
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                title="Toggle Dark Mode"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                className="ml-2 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border-none cursor-pointer outline-none"
              >
                {isDarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                )}
              </button>

            </div>
          </div>
        </nav>

        {/* ROUTING */}
        {currentPage === 'home' && <HomePage setPage={setCurrentPage} />}
        {currentPage === 'products' && <VehicleCatalog setPage={setCurrentPage} onSelectVehicle={setSelectedVehicle} />}
        {currentPage === 'xcient-details' && <XcientDetailPage setPage={setCurrentPage} />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'admin' && <AdminPage />}
      </div>

      <Footer />

      {/* GLOBAL POPUP MODAL */}
      {selectedVehicle && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 999999, backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', padding: '16px' }}>
          
          <div className="bg-[#111111] dark:bg-gray-900 rounded-[2rem] shadow-2xl w-full max-w-lg flex flex-col overflow-hidden relative border border-gray-800 dark:border-gray-700 max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-500 transition-colors">
            
            <div className="relative bg-gradient-to-b from-[#1a1a1a] to-[#111111] dark:from-gray-800 dark:to-gray-900 flex justify-center items-center h-[250px] sm:h-[300px] p-6 border-b border-gray-800 dark:border-gray-700 shrink-0">
              <button 
                onClick={() => setSelectedVehicle(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/10 border-none outline-none shadow-md hover:bg-white/20 rounded-full text-white text-2xl font-bold transition z-[9999] cursor-pointer"
              >
                &times;
              </button>
              <img 
                src={selectedVehicle.background || selectedVehicle.thumb} 
                alt={selectedVehicle.name || 'Vehicle'}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] mb-6 tracking-tight">{selectedVehicle.name}</h2>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-5 text-sm mb-8 bg-[#1a1a1a] dark:bg-gray-800 p-5 sm:p-6 rounded-[1.5rem] border border-gray-800 dark:border-gray-700 text-white">
                <div>
                  <span className="block text-[#FFFFFF] text-xs uppercase tracking-widest font-bold mb-1.5 opacity-90">Classification</span>
                  <strong className="text-sm sm:text-base text-[#FFFFFF] capitalize">{selectedVehicle.classification || 'N/A'}</strong>
                </div>
                <div>
                  <span className="block text-[#FFFFFF] text-xs uppercase tracking-widest font-bold mb-1.5 opacity-90">Code</span>
                  <strong className="text-sm sm:text-base text-[#FFFFFF]">{selectedVehicle.code || 'N/A'}</strong>
                </div>
                <div>
                  <span className="block text-[#FFFFFF] text-xs uppercase tracking-widest font-bold mb-1.5 opacity-90">Capacity</span>
                  <strong className="text-sm sm:text-base text-[#FFFFFF]">{selectedVehicle.info1 || '-'}</strong>
                </div>
                <div>
                  <span className="block text-[#FFFFFF] text-xs uppercase tracking-widest font-bold mb-1.5 opacity-90">Output</span>
                  <strong className="text-sm sm:text-base text-[#FFFFFF]">{selectedVehicle.info2 ? `${selectedVehicle.info2} PS` : '-'}</strong>
                </div>
              </div>

              <button 
                onClick={() => setSelectedVehicle(null)}
                className="w-full bg-[#003469] dark:bg-blue-600 text-[#FFFFFF] border-none outline-none py-4 rounded-full text-lg font-bold hover:bg-blue-800 dark:hover:bg-blue-500 transition-all shadow-[0_10px_20px_rgba(0,52,105,0.4)] hover:-translate-y-1 cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}