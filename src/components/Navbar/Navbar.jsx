import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Logo from '../Logo';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

// menuItems ko yahan import ya define karo
const menuItems = [
  { title: 'Home', url: '/' },
  { title: 'About Us', url: '/about' },
  {
    title: 'Loan Services',
    url: '#',
    submenu: [
      { title: 'Home Loan', url: '/home-loan' },
      { title: 'Property Loan', url: '/property-loan' },
      { title: 'Balance Transfer', url: '/balance-transfer' },
      { title: 'Business Loan', url: '/business-loan' }
    ]
  },
{
  title: 'Loan Calculators',
  url: '#',
  submenu: [
    { title: 'EMI Calculator', url: '/calculators?type=emi' },
    { title: 'Eligibility Calculator', url: '/calculators?type=eligibility' },
    { title: 'Foreclose Calculator', url: '/calculators?type=foreclose' },
    { title: 'Bal-Transfer Calculator', url: '/calculators?type=balance-transfer' },
    { title: 'Pre-Pay Calculator', url: '/calculators?type=pre-payment' }
  ]
},
  { title: 'Offers & Cashback', url: '/offers' },
  { title: 'Contact', url: '/contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (url) => {
    navigate(url);
    setActiveDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
      <div
        className="container mx-auto px-4 flex justify-between items-center"
        style={{
          minHeight: isScrolled ? 64 : 80,
          transition: 'min-height 0.3s'
        }}
      >
        <Logo />
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center" ref={menuRef}>
          {menuItems.map((item, index) => {
            const hasSubmenu = item.submenu && item.submenu.length > 0;
            const isOpen = activeDropdown === index;
            return (
              <div key={index} className="relative">
                <button
                  onClick={() => (hasSubmenu ? setActiveDropdown(isOpen ? null : index) : handleNavigation(item.url))}
                  className="text-gray-700 font-medium hover:text-blue-600 transition flex items-center gap-1"
                >
                  {item.title}
                  {hasSubmenu && (
                    <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  )}
                </button>
                {hasSubmenu && isOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md z-30 animate-fade-in">
                    {item.submenu.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        onClick={() => handleNavigation(subItem.url)}
                        className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gradient-to-br from-[#FFD700] to-[#FFA500] hover:text-white hover:shadow-lg hover:translate-y-[1px] hover:scale-[1.02] transition duration-200 ease-in-out"
                      >
                        {subItem.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <Button className="gradient-primary ml-2" size="sm">
            Apply Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;