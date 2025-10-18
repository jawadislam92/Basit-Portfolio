import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Hi, I'm <span className="text-gray-900">Basit Ahmed</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Brand-Focused Graphic Designer & Video Editor | Canva & Adobe Expert
            </p>
            <p className="text-lg text-gray-100 mb-12 max-w-2xl mx-auto">
              Your visuals shouldn't just look good—they should sell, scroll-stop, and spark action. I'm a Top-Rated Plus designer with 5,000+ Upwork hours, delivering high-converting, brand-aligned content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/portfolio"
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#f9fafb"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="fade-in">
              <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
                <h3 className="text-4xl font-bold text-green-600 mb-2">5,000+</h3>
                <p className="text-gray-600 font-medium">Upwork Hours</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
                <h3 className="text-4xl font-bold text-yellow-500 mb-2">100+</h3>
                <p className="text-gray-600 font-medium">Happy Clients</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
                <h3 className="text-4xl font-bold text-green-600 mb-2">10+</h3>
                <p className="text-gray-600 font-medium">Enterprise Brands</p>
              </div>
            </div>
            <div className="fade-in">
              <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
                <h3 className="text-4xl font-bold text-yellow-500 mb-2">Top Rated+</h3>
                <p className="text-gray-600 font-medium">Upwork Status</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What I Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional design services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Graphic Design */}
            <div className="fade-in">
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-2xl shadow-lg card-hover">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Graphic Design</h3>
                <p className="text-gray-600 mb-6">
                  Branded social media graphics, flyers, banners, product packaging, YouTube thumbnails, and editable Canva templates—designed for conversion and brand consistency.
                </p>
                <Link
                  to="/services"
                  className="text-green-600 font-semibold hover:text-green-700 flex items-center gap-2"
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Video Editing */}
            <div className="fade-in">
              <div className="bg-gradient-to-br from-yellow-50 to-green-50 p-8 rounded-2xl shadow-lg card-hover">
                <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Video Editing</h3>
                <p className="text-gray-600 mb-6">
                  Reels, Shorts, TikToks, YouTube videos, podcasts, and promotional ads—with motion graphics, captions, and music sync that captures attention and drives engagement.
                </p>
                <Link
                  to="/services"
                  className="text-yellow-600 font-semibold hover:text-yellow-700 flex items-center gap-2"
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Let's collaborate and create something amazing together
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Contact Me Today
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
