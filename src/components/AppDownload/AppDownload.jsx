import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const AppDownloadSection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden" >
      <div className="container mx-auto px-4">
        {/* Centered Heading & Paragraph */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Available Across <span style={{ color: "#0074d9" }}>India</span>
          </h2>
          <p className="text-lg text-gray-600 mb-2 text-center max-w-2xl mx-auto">
            While we're based in Pune, we provide our financial services across the entire nation.
            Our digital platform allows you to access our loan products from anywhere in India.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Content */}
          <div>
            <div className="space-y-6 mb-10">
              {/* Headquarters */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#e6f2ff] rounded-full flex items-center justify-center text-[#0074d9]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">Headquarters</h3>
                  <p className="text-gray-600">123, Financial District, Baner Road, Pune, Maharashtra 411045</p>
                </div>
              </div>
              {/* Contact Number */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#e6f2ff] rounded-full flex items-center justify-center text-[#0074d9]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">Contact Number</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              {/* Email Address */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#e6f2ff] rounded-full flex items-center justify-center text-[#0074d9]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">Email Address</h3>
                  <p className="text-gray-600">support@houslyfinserv.com</p>
                </div>
              </div>
            </div>
            {/* Download App */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              {/* App Store Button */}
              <a
                href="#"
                className="bg-black text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-900 transition-all duration-300 text-center w-40"
              >
                <div className="leading-tight">
                  <p className="text-[10px]">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="#"
                className="bg-[#34A853] text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 transition-all duration-300 text-center w-40"
              >
                <div className="leading-tight">
                  <p className="text-[10px]">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </a>
            </div>



          </div>
          {/* Map Section */}
          <div className="relative " style={{ marginTop: "-100px" }}>
            {/* India map SVG */}
            <svg
              viewBox="0 0 950 1000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-[500px]  sm:h-[650px] "
              style={{ display: 'block' }}
              preserveAspectRatio="xMidYMid meet"
            >
              <g transform="translate(-100,220)">
                {/* India map outline */}
                <path
                  d="M242.5,141.5c8.3-4.7,13.7-12.9,16.6-21.9c2-6.3,3.4-14.8,9.9-17.5c4.2-1.8,9,0.3,13.6,0.8 c10.8,1.3,20.6-8.3,31.3-6.3c7.1,1.3,12.2,7.1,17.7,11.7c12.8,10.9,29.5,15.2,44.1,22.9c7.4,3.9,14.3,8.8,21.6,13 c13.6,8,28.9,12.1,44.1,14.6c5.7,0.9,12,1.4,16.9-1.7c6.9-4.4,7.9-14.7,14.8-19.2c7.3-4.7,17.1-0.5,25.2-3.4 c8.5-3.1,12.4-13.1,13.9-22.1c1.5-9,1.9-19,8.1-25.7c5.2-5.7,13.6-7.1,19.6-11.8c8.3-6.5,9.8-18.5,17.6-25.5 c3.6-3.2,8.4-5,12-8c5.1-4.2,7.5-11.2,7.2-18c-0.3-6.7-3.1-13.1-2.8-19.9c0.3-7.1,4.4-15.4,11.4-16.2c6.3-0.7,11.7,5.4,18,4.5 c7.1-1,10.1-9.6,11.6-16.7c0.4-1.9,0.7-3.9,1.8-5.4c1.7-2.4,4.8-3.2,7-5.1c4.9-4.1,3-12.1,5.4-18.1c2.5-6.2,10.8-10,17.2-7.8 c-0.9,4.6-1.8,9.3-2.8,13.9c-0.5,2.6-1.1,5.3-0.5,7.9c0.9,3.7,4.1,6.3,7.6,7.8c3.5,1.5,7.4,2.1,11.2,2.7 c9.2,1.4,18.4,2.9,27.7,2.3c9.2-0.6,18.5-3.7,24.9-10.3c0.9-0.9,1.8-2,2.1-3.3c0.3-1.9-0.8-3.7-1.3-5.5c-1.1-3.9,1.5-7.8,4.3-10.5 c2.8-2.7,6.2-4.8,8.6-7.9c3.7-4.8,4.3-11.1,4.7-17.1c0.3-5.3,0.6-10.9,3.6-15.3c2.4-3.6,6.3-5.9,10.3-7.6 c10.1-4.4,21.3-6.2,32.2-5.1c4.4,0.5,9.1,1.4,12.3,4.4c4.1,3.8,4.6,10,4.6,15.6c0,8,0,16.1,0,24.1c5.3,1,11.2,0.1,15.1-3.6 c3.9-3.7,5.3-9.9,3.3-14.7c-1-2.5-2.9-4.6-3.4-7.3c-0.7-3.5,1.1-7.4,4.1-9.3s6.8-2.1,10.3-1.8c12,1.1,23.7,5.3,35.6,6.7 c2.2,0.3,4.9,0.3,6.2-1.5c1.9-2.6-0.5-6.8,1.5-9.3c1-1.3,2.8-1.5,4.4-1.5c4.8-0.1,9.6,0.7,14.1,2.1c4.7,1.5,9.4,3.9,12.1,8 c2.3,3.5,2.7,7.9,2.9,12.1c0.6,10.8,0.4,21.7-0.7,32.5c-0.4,3.6-0.8,7.2-2.1,10.5c-2.6,6.9-8.3,12.1-12.2,18.4 c-3.6,5.9-5.9,12.5-7.9,19.1c-4.7,15.2-8.8,30.6-12.2,46.1c-2.6,11.7-4.8,23.5-5.7,35.5c-0.8,11.5-0.5,23.1,0.7,34.6 c0.5,4.5,1,9.1,1.7,13.6c0.7,4.5,1.5,8.9,2.5,13.4c1.7,7.5,3.9,14.9,6.4,22.2c2.8,8,6.2,15.8,8.1,24c1.9,8.2,2.5,16.8,0.8,25 c-0.2,1.2-0.5,2.3-0.9,3.5c-1,2.6-2.7,4.9-4.2,7.1c-7.5,11.3-10,25.7-6.9,38.7c2.4,9.9,7.4,19,9.4,29c2.1,10.3,0.9,21.3-3.1,30.9 c-4,9.7-10.4,18.2-17.4,25.9c-6.9,7.7-14.6,14.7-22.7,21.1c-4.6,3.6-9.4,7.1-14.6,9.9c-4.3,2.3-8.9,4.1-13.6,5.3 c-9.5,2.4-19.3,2.6-29,2.7c-14.1,0.1-28.1,0.2-42.2,0.2c-6.2,0-13-0.3-17.7-4.3c-3.5-3-5-7.7-6.4-12.1c-2.5-7.9-4.9-16-5-24.3 c-0.1-8.4,2.3-16.7,5.3-24.6c3-7.9,6.6-15.6,8.1-23.9c1.6-8.3,1.1-16.8-0.8-25c-1.9-8.2-5.1-16-8.2-23.8 c-6.1-15.4-11.5-31.2-20-45.5c-5.1-8.5-11.2-16.5-18.5-23.1c-10.4-9.4-23.1-15.9-36.3-20.5c-5.4-1.9-11-3.5-16.8-3.8 c-5.8-0.2-11.8,1.2-16.3,4.9c-3.5,2.9-5.9,7-8.5,10.8c-6.9,10-16.5,18-27.3,23c-5.7,2.6-11.8,4.6-18.1,5.1 c-6.3,0.6-12.8-0.4-18.3-3.5c-7.1-3.8-12.2-10.5-17.1-17c-4.8-6.4-9.6-12.9-14.4-19.3c-10.9-14.5-21.9-29.1-33.7-42.8 c-5.9-6.9-12.1-13.6-16.5-21.4c-4.5-7.8-7.1-16.5-9.6-25.1c-2.1-7.2-4.2-14.5-6.6-21.6c-5.4-15.6-13.2-30.3-17.1-46.4 c-2.7-11.1-3.6-22.7-2-34c1.6-11.3,5.5-22.2,10.8-32C228.6,152,234.2,146.2,242.5,141.5z"
                  fill="url(#india-gradient)"
                  stroke="#666666"
                  strokeWidth="1.5"
                />
                {/* Gradient */}
                <defs>
                  <linearGradient id="india-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e6f2ff" />
                    <stop offset="100%" stopColor="#b3d7ff" />
                  </linearGradient>
                </defs>
                {/* State boundaries */}
                <path
                  d="M320,220 L400,180 L480,200 L540,180 L580,240 L550,300 L480,320 L400,280 L320,220"
                  stroke="#a0a0a0"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M480,320 L550,300 L600,340 L620,400 L580,450 L520,440 L480,320"
                  stroke="#a0a0a0"
                  strokeWidth="1"
                  fill="none"
                />
                {/* Major cities */}
                <circle cx="532" cy="440" r="12" fill="#0074d9" className="animate-pulse" />
                <text x="532" y="470" textAnchor="middle" fill="#000000" fontWeight="bold" fontSize="22">Pune (HQ)</text>
                <circle cx="475" cy="350" r="6" fill="#0074d9" />
                <text x="475" y="380" textAnchor="middle" fill="#333333" fontSize="18" fontWeight="bold">Mumbai</text>
                <circle cx="520" cy="560" r="6" fill="#0074d9" />
                <text x="520" y="590" textAnchor="middle" fill="#333333" fontSize="18" fontWeight="bold">Bangalore</text>
                <circle cx="620" cy="480" r="6" fill="#0074d9" />
                <text x="620" y="510" textAnchor="middle" fill="#333333" fontSize="18" fontWeight="bold">Hyderabad</text>
                <circle cx="650" cy="350" r="6" fill="#0074d9" />
                <text x="650" y="380" textAnchor="middle" fill="#333333" fontSize="18" fontWeight="bold">Kolkata</text>
                <circle cx="520" cy="250" r="6" fill="#0074d9" />
                <text x="520" y="280" textAnchor="middle" fill="#333333" fontSize="18" fontWeight="bold">Delhi</text>
                <circle cx="400" cy="440" r="6" fill="#0074d9" />
                <text x="400" y="470" textAnchor="middle" fill="#333333" fontSize="18" fontWeight="bold">Ahmedabad</text>
                <circle cx="430" cy="650" r="6" fill="#0074d9" />
                <text x="430" y="680" textAnchor="middle" fill="#333333" fontSize="18" fontWeight="bold">Chennai</text>
                <circle cx="300" cy="380" r="6" fill="#0074d9" />
                <text x="300" y="410" textAnchor="middle" fill="#333333" fontSize="18" fontWeight="bold">Jaipur</text>
                <circle cx="480" cy="150" r="6" fill="#0074d9" />
                <text x="480" y="180" textAnchor="middle" fill="#333333" fontSize="18" fontWeight="bold">Chandigarh</text>
                <circle cx="600" cy="250" r="6" fill="#0074d9" />
                <text x="600" y="280" textAnchor="middle" fill="#333333" fontSize="18" fontWeight="bold">Lucknow</text>
                <circle cx="720" cy="400" r="6" fill="#0074d9" />
                <text x="720" y="430" textAnchor="middle" fill="#333333" fontSize="18" fontWeight="bold">Guwahati</text>
                <circle cx="350" cy="650" r="6" fill="#0074d9" />
                <text x="350" y="680" textAnchor="middle" fill="#333333" fontSize="18" fontWeight="bold">Kochi</text>
                {/* Connection lines from Pune */}
                <g stroke="#0074d9" strokeWidth="1.5" strokeDasharray="2" opacity="0.5">
                  <line x1="532" y1="440" x2="475" y2="350" />
                  <line x1="532" y1="440" x2="520" y2="560" />
                  <line x1="532" y1="440" x2="620" y2="480" />
                  <line x1="532" y1="440" x2="650" y2="350" />
                  <line x1="532" y1="440" x2="520" y2="250" />
                  <line x1="532" y1="440" x2="400" y2="440" />
                  <line x1="532" y1="440" x2="430" y2="650" />
                  <line x1="532" y1="440" x2="300" y2="380" />
                  <line x1="532" y1="440" x2="480" y2="150" />
                  <line x1="532" y1="440" x2="600" y2="250" />
                  <line x1="532" y1="440" x2="720" y2="400" />
                  <line x1="532" y1="440" x2="350" y2="650" />
                </g>
                {/* Service regions overlay */}
                <path
                  d="M242.5,141.5c8.3-4.7,13.7-12.9,16.6-21.9c2-6.3,3.4-14.8,9.9-17.5c4.2-1.8,9,0.3,13.6,0.8"
                  stroke="#4CAF50"
                  strokeWidth="5"
                  fill="none"
                  strokeDasharray="10,5"
                  opacity="0.3"
                />
              </g>
            </svg>
            {/* Map legend - right side */}
            <div className="absolute bottom-8 right-6 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-gray-100">
              <div className="text-xs font-medium text-gray-700 mb-2">Service Coverage</div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#0074d9]"></span>
                <span className="text-xs">Major Cities</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-1 bg-[#4CAF50]"></span>
                <span className="text-xs">Service Regions</span>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-5 -left-5 w-28 h-28 bg-[#e6f2ff] rounded-xl -z-10"></div>
            <div className="absolute -top-5 -right-5 w-20 h-20 bg-[#b3d7ff] rounded-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;