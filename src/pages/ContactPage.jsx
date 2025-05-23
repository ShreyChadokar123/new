import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-14 text-center px-4 font-sans overflow-hidden">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2 tracking-tight">
            <span className="text-white">Contact </span>
            <span className="text-yellow-400">Us</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Get in touch with our team for questions, assistance, or partnerships.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Whether you need help with your loan application or want to partner with us, we’re just a message away.
            </p>

            <div className="space-y-6">
              {[
                {
                  Icon: MapPin,
                  title: 'Visit Our Office',
                  content: '123, Hously Finserv Tower, MG Road, Pune, Maharashtra - 411001',
                },
                {
                  Icon: Phone,
                  title: 'Call Us',
                  content: '+91 9876 543 210\n+91 020 1234 5678',
                },
                {
                  Icon: Mail,
                  title: 'Email Us',
                  content: 'info@houslyfinserv.com\nsupport@houslyfinserv.com',
                },
                {
                  Icon: Clock,
                  title: 'Working Hours',
                  content: 'Mon–Fri: 9:00 AM – 6:00 PM\nSat: 10:00 AM – 4:00 PM\nSunday: Closed',
                },
              ].map(({ Icon, title, content }, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
            <form className="bg-white p-6 rounded-xl shadow-md space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="border p-3 rounded-md w-full" required />
                <input type="email" placeholder="Your Email" className="border p-3 rounded-md w-full" required />
              </div>
              <input type="text" placeholder="Phone Number" className="border p-3 rounded-md w-full" required />
              <textarea placeholder="Your Message" rows="5" className="border p-3 rounded-md w-full" required />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Our Location</h2>
          <div className="w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.4554618292426!2d73.789973!3d18.603582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b84c4cf1ff3f%3A0xf6d8d8e3d5f5f8a9!2sRahatani%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411017!5e0!3m2!1sen!2sin!4v1646038235637!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;