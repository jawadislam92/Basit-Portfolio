import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
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
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Creative professional with a passion for visual storytelling
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                I'm Basit Ahmed
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                A Top-Rated Plus Graphic Designer, Video Editor, and Canva Pro Specialist with 5,000+ Upwork hours, and a track record of delivering high-converting, brand-aligned content for agencies, startups, and social-first brands.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From bold graphics to polished video edits, I help you build visual assets that not only match your identity but also drive results. I treat your brand like it's my own—no shortcuts, no guesswork.
              </p>
              <p className="text-lg text-gray-700">
                Each design is strategy-first, not template-first. You get fast delivery, daily updates & clean, reliable communication. I'm built for both long-term partnerships and quick-turn projects, trusted by 10+ enterprise brands and 100+ happy clients.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="fade-in">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg card-hover">
                  <h3 className="text-3xl font-bold text-green-600 mb-2">5,000+</h3>
                  <p className="text-gray-600">Upwork Hours</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg card-hover">
                  <h3 className="text-3xl font-bold text-yellow-500 mb-2">100+</h3>
                  <p className="text-gray-600">Clients</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg card-hover">
                  <h3 className="text-3xl font-bold text-green-600 mb-2">10+</h3>
                  <p className="text-gray-600">Enterprise Brands</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg card-hover">
                  <h3 className="text-3xl font-bold text-yellow-500 mb-2">Top Rated+</h3>
                  <p className="text-gray-600">Status</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Me
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What sets my work apart from the rest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand-First Approach */}
            <div className="fade-in">
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-2xl shadow-lg card-hover h-full">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Brand-First Design</h3>
                <p className="text-gray-700">
                  I treat your brand like it's my own—no shortcuts, no guesswork. Each design is strategy-first, not template-first, ensuring consistency and recognition across all platforms.
                </p>
              </div>
            </div>

            {/* Reliable Communication */}
            <div className="fade-in">
              <div className="bg-gradient-to-br from-yellow-50 to-green-50 p-8 rounded-2xl shadow-lg card-hover h-full">
                <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Clear Communication</h3>
                <p className="text-gray-700">
                  You get fast delivery, daily updates & clean, reliable communication. I'm transparent and timely—you'll always know your project status.
                </p>
              </div>
            </div>

            {/* Proven Results */}
            <div className="fade-in">
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-2xl shadow-lg card-hover h-full">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Results</h3>
                <p className="text-gray-700">
                  With 5,000+ Upwork hours and 100+ satisfied clients, I have a proven track record. Trusted by 10+ enterprise brands and built for both long-term partnerships and quick-turn projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tools and skills I use to bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Canva Pro',
              'Photoshop',
              'Illustrator',
              'Premiere Pro',
              'After Effects',
              'Figma',
              'CapCut',
              'Pictory AI'
            ].map((skill, index) => (
              <div key={index} className="fade-in">
                <div className="bg-white p-6 rounded-xl shadow-lg card-hover text-center">
                  <p className="text-lg font-semibold text-gray-800">{skill}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
