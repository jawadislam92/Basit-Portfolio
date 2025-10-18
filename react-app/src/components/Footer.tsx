import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold gradient-bg bg-clip-text text-transparent mb-4">
              Basit Ahmed
            </h3>
            <p className="text-gray-400 mb-2">
              Top-Rated Plus Graphic Designer & Video Editor
            </p>
            <p className="text-gray-400 text-sm">
              Currently at Sparking Asia | 5,000+ Upwork Hours | 100+ Happy Clients
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-500 transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-green-500 transition">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-green-500 transition">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-green-500 transition">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-green-500 transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="font-semibold">Email:</span><br />
                <a href="mailto:basitahmed0222@gmail.com" className="hover:text-green-500 transition">
                  basitahmed0222@gmail.com
                </a>
              </p>
              <p className="text-gray-400">
                <span className="font-semibold">Upwork:</span><br />
                <a 
                  href="https://www.upwork.com/freelancers/~017d2322b95ba07e6f" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition"
                >
                  View Profile
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Basit Ahmed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
