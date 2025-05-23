import React from 'react';
import { CalendarDays, User } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: 'How to Get a Personal Loan Instantly',
    description: 'Learn the steps to apply for a personal loan and get approval within 24 hours.',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80',
    author: 'Team Shrey',
    date: 'May 22, 2025',
  },
  {
    id: 2,
    title: 'Top 5 Tips to Improve Your CIBIL Score',
    description: 'A higher CIBIL score increases your chances of getting better loan offers.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSat-yzlioO_dKMhpPwf4MO8o-v7ciBhxX-5Q&s',
    author: 'Shrey',
    date: 'May 18, 2025',
  },
  {
    id: 3,
    title: 'How EMI Works for Home Loans',
    description: 'Understand how Equated Monthly Installments (EMIs) are calculated and paid.',
    image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437d5?auto=format&fit=crop&w=800&q=80',
    author: 'Finance Team',
    date: 'May 10, 2025',
  },
];

const BlogsPage = () => {
  return (
    <section
      className="bg-gray-50 py-10 px-2"
      style={{ fontFamily: "'Glacial Indifference', sans-serif" }}
    >
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
          Latest <span className="text-gradient">Blogs</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Inspiration, tips & stories for your financial journey.
        </p>
      </div>

      {/* Blog Cards Container */}
      <div className="container mx-auto">
        <div
          className="flex gap-3 overflow-x-auto px-2 sm:px-0 lg:grid lg:grid-cols-3 lg:gap-6"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col flex-shrink-0 w-64 sm:w-full h-72 sm:h-auto"
              style={{
                scrollSnapAlign: 'start',
              }}
            >
              <div className="relative h-28 sm:h-36">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-white/80 px-2 py-0.5 rounded-full text-xs font-semibold text-blue-700 shadow">
                  Blog
                </div>
              </div>
              <div className="flex-1 flex flex-col p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-bold mb-1 text-blue-700 group-hover:text-blue-900 transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-2 flex-1 text-xs sm:text-sm">{blog.description}</p>
                <div className="flex items-center gap-3 text-gray-400 text-[10px] sm:text-xs mb-3">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3 sm:w-4 sm:h-4" /> {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4" /> {blog.date}
                  </span>
                </div>
                <div className="flex mt-auto">
                  <a
                    href="#"
                    className="bg-gradient-to-r from-blue-500 to-blue-400 text-white w-full py-1.5 sm:py-2 rounded-full font-semibold shadow hover:from-blue-600 hover:to-blue-500 transition-all duration-200 text-xs sm:text-sm text-center"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient text utility and scrollbar hide */}
      <style>{`
        .text-gradient {
          background: linear-gradient(90deg, #0074d9 0%, #00bcd4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        .overflow-x-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default BlogsPage;
