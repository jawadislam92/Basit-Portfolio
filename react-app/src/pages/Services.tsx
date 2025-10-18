import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
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

  const graphicServices = [
    { title: 'Social Media Graphics', description: 'Branded posts for Instagram, Facebook, YouTube, LinkedIn, TikTok' },
    { title: 'YouTube Thumbnails', description: 'High-CTR thumbnails and channel branding assets' },
    { title: 'Flyers & Banners', description: 'Eye-catching flyers, banners, posters, and menus' },
    { title: 'Product Packaging', description: 'Labels, packaging design, and retail-ready mockups' },
    { title: 'Canva Templates', description: 'Editable Canva Pro templates tailored to your brand' },
    { title: 'Brand Identity', description: 'Logo design, brand guidelines, and visual branding' }
  ];

  const videoServices = [
    { title: 'Short-Form Videos', description: 'Reels, Shorts, TikToks optimized for engagement and reach' },
    { title: 'YouTube Video Editing', description: 'Long-form editing, talking head style, podcast editing' },
    { title: 'Motion Graphics', description: 'Animated graphics, text overlays, and visual effects' },
    { title: 'Promotional Ads', description: 'High-impact video ads for brands and products' },
    { title: 'Multi-Cam Editing', description: 'Professional podcast editing with camera switching' },
    { title: 'AI Video Creation', description: 'AI-powered video automation using Pictory and Synthesia' }
  ];

  const coreSkills = [
    'Canva Pro',
    'Social Media Design',
    'Video Editing',
    'Motion Graphics',
    'YouTube Thumbnails',
    'Product Packaging',
    'Brand Identity',
    'Short-Form Content',
    'AI Video Tools',
    'Multi-Cam Editing',
    'Photo Editing',
    'Template Design'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My Services
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Professional design solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Graphic Design Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4 font-semibold">
              Graphic Design
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Visual Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Creating stunning visuals that communicate your message
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {graphicServices.map((service, index) => (
              <div key={index} className="fade-in">
                <div className="bg-white p-8 rounded-2xl shadow-lg card-hover h-full">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Editing Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-4 font-semibold">
              Video Editing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Video Production Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bringing your stories to life through professional video editing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoServices.map((service, index) => (
              <div key={index} className="fade-in">
                <div className="bg-gradient-to-br from-yellow-50 to-green-50 p-8 rounded-2xl shadow-lg card-hover h-full">
                  <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Skills */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tools I Master
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional software and tools I use daily
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { name: 'Canva Pro', color: 'bg-teal-600' },
              { name: 'Adobe Photoshop', color: 'bg-blue-600' },
              { name: 'Adobe Illustrator', color: 'bg-orange-600' },
              { name: 'Premiere Pro', color: 'bg-purple-600' },
              { name: 'After Effects', color: 'bg-indigo-600' },
              { name: 'Figma', color: 'bg-pink-600' },
              { name: 'CapCut', color: 'bg-green-600' },
              { name: 'Pictory AI', color: 'bg-yellow-600' }
            ].map((tool, index) => (
              <div key={index} className="fade-in">
                <div className="bg-white p-6 rounded-xl shadow-lg card-hover text-center">
                  <div className={`w-12 h-12 ${tool.color} rounded-lg mx-auto mb-3`}></div>
                  <p className="text-gray-800 font-semibold">{tool.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Core Skills */}
          <div className="text-center mb-12 fade-in">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Core Skills
            </h3>
          </div>

          <div className="fade-in">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex flex-wrap gap-3 justify-center">
                {coreSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-green-100 to-yellow-100 text-gray-800 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Ready to bring your vision to life? Get in touch today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/portfolio"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105"
            >
              View Portfolio
            </Link>
            <Link
              to="/contact"
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-xl hover:scale-105"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
