import React, { useState } from 'react';
import {
  FileText,
  Phone,
  FileCheck,
  CreditCard,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const steps = [
  {
    icon: FileText,
    title: 'Apply Online',
    description: 'Fill out our simple online application form in just 5 minutes',
    detail:
      'Our streamlined application requires minimal documentation. Just provide your basic personal information, employment details, and preferred loan amount.',
  },
  {
    icon: Phone,
    title: 'Get a Call',
    description: 'Our loan expert will call you to discuss your requirements',
    detail:
      'A dedicated loan specialist will contact you within 2 business hours to understand your needs better and guide you through the process.',
  },
  {
    icon: FileCheck,
    title: 'Document Verification',
    description: 'Upload required documents for verification and processing',
    detail:
      'Upload your ID proof, address proof, income statements, and property documents through our secure portal. Our verification team works quickly to process your application.',
  },
  {
    icon: CreditCard,
    title: 'Loan Approval',
    description: 'Get your loan approved and disbursed to your account',
    detail:
      'Once verified, your loan will be approved and the funds will be directly transferred to your bank account within 24-48 hours.',
  },
];

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const toggleStep = (index) => {
    setActiveStep(index);
  };

  return (
    <section
      style={{ fontFamily: "'Glacial Indifference', sans-serif" }}
      className="py-6 md:py-8 relative overflow-hidden"
    >
      <div className="container mx-auto relative z-10 px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-800 leading-snug">
            Simple <span className="text-blue-500">4-Step</span> Process
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            We've simplified the loan application process to get you funded faster
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8">
          {/* Sidebar - only restrict width on mobile using max-w and mx-auto */}
          <div className="lg:w-1/3 w-full max-w-[75vw] mx-auto lg:mx-0">
            <div className="lg:sticky top-24">
              <div className="flex flex-col">
                {steps.map((step, idx) => (
                  <div key={idx} className="mb-4">
                    <button
                      className={cn(
                        'flex items-center p-3 sm:p-4 border-l-4 transition-all group text-left w-full',
                        activeStep === idx
                          ? 'border-l-blue-600 bg-white shadow rounded-r-lg'
                          : 'border-l-gray-200 hover:border-l-blue-300 hover:bg-white/60'
                      )}
                      onClick={() => toggleStep(idx)}
                    >
                      <div
                        className={cn(
                          'w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-3 sm:mr-4 transition-all text-sm font-semibold',
                          activeStep === idx
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100'
                        )}
                      >
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <h3
                          className={cn(
                            'font-semibold text-sm sm:text-base',
                            activeStep === idx ? 'text-blue-600' : 'text-gray-700'
                          )}
                        >
                          {step.title}
                        </h3>
                        <p className="text-xs text-gray-500 hidden sm:block">
                          {step.description}
                        </p>
                      </div>
                      <ChevronRight
                        className={cn(
                          'ml-auto w-4 h-4 transition-all lg:block',
                          activeStep === idx ? 'text-blue-600 rotate-90' : 'text-gray-400'
                        )}
                      />
                    </button>

                    {/* Mobile detail */}
                    <div className="lg:hidden">
                      {activeStep === idx && (
                        <div className="mt-3 bg-white rounded-xl shadow p-4 border-0 text-sm sm:text-base opacity-90">
                          <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                            <ChevronDown className="w-4 h-4 mr-2 text-blue-600" />
                            Step Details
                          </h4>
                          <p className="text-gray-600">{step.detail}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="mt-6 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all duration-500"
                  style={{ width: `${(activeStep + 1) * 25}%` }}
                />
              </div>
              <div className="mt-2 text-right text-xs sm:text-sm text-gray-600">
                {`Step ${activeStep + 1} of 4`}
              </div>
            </div>
          </div>

          {/* Main content for desktop */}
          <div className="lg:w-2/3 w-full hidden lg:block">
            <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6 md:p-8">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 mr-3 sm:mr-4">
                  {
                    (() => {
                      const Icon = steps[activeStep].icon;
                      return <Icon className="w-5 h-5 sm:w-6 sm:h-6" />;
                    })()
                  }
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {steps[activeStep].title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm sm:text-base mb-5">
                {steps[activeStep].description}
              </p>

              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border-0 text-sm sm:text-base opacity-90">
                <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                  Step Details
                </h4>
                <p className="text-gray-600">{steps[activeStep].detail}</p>
              </div>

              <div className="mt-6 sm:mt-8 flex justify-between">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  className={cn(
                    'px-4 py-2 text-sm rounded border border-blue-600 text-black hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed'
                  )}
                >
                  Previous Step
                </button>

                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                  className={cn(
                    'px-4 py-2 text-sm rounded text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 disabled:opacity-30 disabled:cursor-not-allowed'
                  )}
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
