import React, { useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/HeroSection/Hero';
import Features from './components/Features/Features';
import LoanServices from './components/LoanServices/LoanServices';
import TrendingOffers from './components/TrendingOffers/TrendingOffers';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Partners from './components/Partners/Partners';
import AppDownload from './components/AppDownload/AppDownload';
import HappyCustomers from './components/HappyCustomers/HappyCustomers';
import HappyCustomerStats from './components/HappyCustomerStats';
import ChatWidth from './components/ChatWidget';
import LoanCalculators from './components/LoanCalculators/LoanCalculators';
import BlogsPage from './components/BlogsPage';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight * 0.85) {
          el.classList.add('animate-fade-in-up');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <div className="animate-on-scroll">
        <HappyCustomerStats />
      </div>
      <div className="animate-on-scroll">
        <Features />
      </div>
      <div className="animate-on-scroll">
        <LoanServices />
      </div>

      {/* ✅ Custom Loan Calculator section with design */}
      <div className="animate-on-scroll">
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
          <div className="w-full mx-auto">
        <LoanCalculators />
          </div>
        </div>
      </div>
      <div className="animate-on-scroll">
        <TrendingOffers />
      </div>
      <div className="animate-on-scroll">
        <HowItWorks />
      </div>
      <div className="animate-on-scroll">
        <Partners />
      </div>
      <div className="animate-on-scroll">
        <AppDownload />
      </div>
      <div className="animate-on-scroll">
        <HappyCustomers />
      </div>
      <div className="animate-on-scroll">
        <ChatWidth />
      </div>
        <div className="animate-on-scroll">
        <BlogsPage/>
      </div>
    </Layout>
  );
};

export default Index;
