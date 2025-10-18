import { useState, useEffect } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Shorts/Reels/TikTok Editing',
      category: 'video',
      description: 'Fast-paced, scroll-stopping edits designed to boost views and engagement',
      tags: ['Premiere Pro', 'After Effects', 'TikTok'],
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800'
    },
    {
      id: 2,
      title: 'YouTube Thumbnail Design',
      category: 'graphics',
      description: 'High-CTR thumbnails that capture attention and drive clicks',
      tags: ['Photoshop', 'Thumbnails', 'YouTube'],
      image: 'https://images.unsplash.com/photo-1611926653670-1e4f675e57f1?w=800'
    },
    {
      id: 3,
      title: 'Product Packaging & Labels',
      category: 'branding',
      description: 'Print-ready packaging design for retail and eCommerce products',
      tags: ['Illustrator', 'Packaging', 'Print'],
      image: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800'
    },
    {
      id: 4,
      title: 'Multi-Cam Podcast Editing',
      category: 'video',
      description: 'Professional podcast editing with camera switching and graphics',
      tags: ['Premiere Pro', 'Podcast', 'Multi-Cam'],
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800'
    },
    {
      id: 5,
      title: 'Social Media Post Design',
      category: 'graphics',
      description: 'Branded graphics for Instagram, Facebook, LinkedIn, and TikTok',
      tags: ['Canva', 'Social Media', 'Branding'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800'
    },
    {
      id: 6,
      title: 'Promotional Brand Ads',
      category: 'video',
      description: 'Dynamic video ads optimized for social media and web',
      tags: ['After Effects', 'Video Ads', 'Motion Graphics'],
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800'
    },
    {
      id: 7,
      title: 'Flyers & Brochures',
      category: 'graphics',
      description: 'Print and digital marketing materials for various brands',
      tags: ['Photoshop', 'Print Design', 'Marketing'],
      image: 'https://images.unsplash.com/photo-1635776062043-223faf322554?w=800'
    },
    {
      id: 8,
      title: 'Talking Head Video Editing',
      category: 'video',
      description: 'Long-form YouTube editing in Ali Abdaal style with clean cuts',
      tags: ['Premiere Pro', 'YouTube', 'Long-Form'],
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800'
    },
    {
      id: 9,
      title: 'Cover Art & Album Designs',
      category: 'branding',
      description: 'Creative cover art designs for music albums and playlists',
      tags: ['Photoshop', 'Cover Art', 'Music'],
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

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

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'graphics', label: 'Graphics' },
    { id: 'video', label: 'Videos' },
    { id: 'branding', label: 'Branding' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My Portfolio
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            A showcase of my best work in graphic design and video editing
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`portfolio-filter px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'active'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Portfolio Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="portfolio-item fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                  {/* Image */}
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`tag ${
                        item.category === 'graphics' ? 'tag-green' :
                        item.category === 'video' ? 'tag-yellow' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12 fade-in">
              <p className="text-gray-600 text-lg">
                No projects found in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Project Statistics
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that showcase my experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="fade-in text-center">
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-2xl shadow-lg card-hover">
                <h3 className="text-4xl font-bold text-green-600 mb-2">5,000+</h3>
                <p className="text-gray-600 font-medium">Upwork Hours</p>
              </div>
            </div>
            <div className="fade-in text-center">
              <div className="bg-gradient-to-br from-yellow-50 to-green-50 p-8 rounded-2xl shadow-lg card-hover">
                <h3 className="text-4xl font-bold text-yellow-600 mb-2">100+</h3>
                <p className="text-gray-600 font-medium">Happy Clients</p>
              </div>
            </div>
            <div className="fade-in text-center">
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-2xl shadow-lg card-hover">
                <h3 className="text-4xl font-bold text-green-600 mb-2">10+</h3>
                <p className="text-gray-600 font-medium">Enterprise Brands</p>
              </div>
            </div>
            <div className="fade-in text-center">
              <div className="bg-gradient-to-br from-yellow-50 to-green-50 p-8 rounded-2xl shadow-lg card-hover">
                <h3 className="text-4xl font-bold text-yellow-600 mb-2">Top Rated+</h3>
                <p className="text-gray-600 font-medium">Upwork Status</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Like What You See?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Let's create something amazing for your brand
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
